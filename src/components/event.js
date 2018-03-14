import React, { Component } from 'react';

import { connect } from 'react-redux';
import { updateMaxPlayers } from '../redux/actions'
import { Link, Redirect } from 'react-router-dom'

import { joinEvent } from '../redux/actions'

class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      redirect: false
     }
    // console.log(this.props.match.params.eventId);
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      // If the user is not logged in, redirect them to the signup page
        return <Redirect to="/signup" />
    }
    return (
      <div className="col-md-12 container eventdetails">
        <div className="pull-right">
          <Link to="/viewevents"><button id="btnBack" className="btn btn-info btn-xs">Back to Events</button></Link>
        </div>
        {// console.log(this.props.events.filter((item) => item.id == this.props.match.params.eventId))
        
          this.props.events
            .filter(item => item.id == this.props.match.params.eventId)
            .map((item, index) => (
              <div className="col-md-10" key={index}>
                <div className="col-md-5 eventdetail-left">
                  <div className="row innerEventCard">
                    <h4>{item.date}</h4>
                    <h4>{item.event}</h4>
                    {/* <p>Category: {item.category}</p> */}
                    
                  </div>
                  <div className="row innerEventCard">
                    <p className="detailsSubheader">Details:</p>                
                    <p className="message">{item.message}</p>
                    
                    <div className="row innerEventCard">
                      <p className="detailsSubheader">Status: </p>
                      <p>{ this.getEventStatus(item.id) }</p>                
                    </div>
                    
                    <p>Minimum number of players needed: {item.minPlayersNeeded}</p>
                    <p>Maximum number of players needed: {item.maxPlayersNeeded}</p>
                  </div>
                  <div className="row innerEventCard">
                    <button id="btnJoin" className="btn btn-success btnPadding" onClick={ this.submitJoinEvent.bind(this) }>
                      Join the Event
                    </button>
                  </div>
                </div>
                
                <div className="col-md-5 eventCard">
                  <div className="row innerEventCard">
                    <p className="detailsSubheader">Location:</p>
                    <p>{item.address}</p>
                    <p>{item.zip}</p>
                  </div>
                                  
                </div>
              </div>
            ))
        }

          <div className="col-md-12 container">
            <div><h3>Players</h3></div>        
            <div className="col-md-12 container">
                { this.displayAttendees(this.props.match.params.eventId) }
            </div>
          </div>
      </div>
    );
  }

  submitJoinEvent(e) {
    // Add the user if the user is logged in. Logged in user's details are stored in this.props.loggedInUser
    // console.log(this.props.loggedInUser);
    const eventID = this.props.match.params.eventId;

    if (this.props.loggedInUser.length > 0) {
      
      // User is logged in. Join the user to the event
      // console.log("Join userID " + this.props.loggedInUser[0].id + " to eventID " + eventID);

      // Make sure the user isn't already joined to the event
      // Filter the redux participants array by the eventID
      var eventArr = this.props.participants.filter(item => item.eventID == eventID);
      
      var partOfEvent = false;
      // If user is part of the event then flag true
      for (var i = 0; i < eventArr.length; i++) {
    
        if (eventArr[i].userId == this.props.loggedInUser[0].id) {
          // UserID found. Flag the user
          // console.log("UserID already joined: " + eventArr[i].userId);
          partOfEvent = true;
        }    
      }

      if (partOfEvent) {
        // User is already a participant. Send alert
        alert("You are already signed up to play in this event.");
      }
      else {
        // User is not a participant, Add the userID/eventID association to the participants array
        var confirmEvent = false;
        confirmEvent = confirm("Would you like to join this game?");

        if (confirmEvent) {
          // Add the user as a participant
          var participantsArr = this.props.participants.concat( {
              userId: this.props.loggedInUser[0].id,
              eventID: eventID
            }
          )

          // Update particpants in redux
          this.props.addParticipant(participantsArr);

          // Update the number of participants. Subtract by max by one
          var getEventCopy = this.props.events.filter( (item) => item.id == eventID );

          // console.log(getEventCopy);
          getEventCopy[0].maxPlayersNeeded -= 1;
        }
      }
      

    }
    else {
      // User is not logged in. Redirect to sign up page
      // console.log("Login the user");
      this.setState({ 
        redirect: true
       })
      
    }
  }

  displayAttendees(eventID) {
    // Use the participants array to get the people who are playing in the event
    let players = [];

    for (let i = 0; i < this.props.participants.length; i++) {

        if (this.props.participants[i].eventID == eventID) {
            // For all userIDs that are playing, find their respective record in the usersArr and store into players array
            // console.log(this.props.participants[i].userId);
            
            // Filter the usersArr by id and push into the players array
            let usersArrCopy = this.props.usersArr.filter((item) => item.id == this.props.participants[i].userId )
            // console.log(usersArrCopy[0]);
            players.push(usersArrCopy[0]);            
        }
    }

    // console.log(players);
    // Create the participating players' cards
    return players.map ( (item, index) =>
        <div className="col-md-3 playerCard row" key={index}>
            <img src="https://qph.fs.quoracdn.net/main-qimg-7ca600a4562ef6a81f4dc2bd5c99fee9-c" width="75" className="img-circle img-responsive" />
            { item.name }
        </div>
    )
  }

  getEventStatus(eventID) {
    // Use the eventID to get the participants
    // If the number of participants is less than the number of max players, then set status to Open, otherwise it is closed
    
    let eventIDCounter = 0;
    for (let i = 0; i < this.props.participants.length; i++) {
        // If the participant's eventID matches, then tally up the eventIDCounter
        if (this.props.participants[i].eventID == eventID) {
            eventIDCounter += 1;
            // console.log(this.props.participants[i]);
        }            
    }

    // Set the event's status. If eventIDCounter <= max number of players, status is open
    let status = "Closed";
    let eventCopy =  this.props.events.filter(item => item.id == eventID );
    
    if (eventIDCounter < eventCopy[0].maxPlayersNeeded) {
        // console.log("Number of participants: " + eventIDCounter);
        status = "Open";
    }


    // console.log("Number of participants: " + eventIDCounter);
    return status;
    
}
}

const MapStateToProps = state => {
  return {
    events: state.events,
    participants: state.participants,
    usersArr: state.usersArr,
    loggedInUser: state.loggedInUser
  }
}

const MapDispatchToProps = dispatch => {
  return {
    addParticipant: attendee => dispatch(joinEvent(attendee))
  }
}



export default connect(MapStateToProps, MapDispatchToProps)(Home);
