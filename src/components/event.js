import React, { Component } from 'react';

import { connect } from 'react-redux';
import { updateMaxPlayers } from '../redux/actions'
import { Link, Redirect } from 'react-router-dom'

import { joinEvent } from '../redux/actions'

class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = { }
    // console.log(this.props.match.params.eventId);
  }

  render() {
    // if (this.props.loggedInUser.length == 0) {
    //   return <Redirect to="/signup" />
    // }
    return (
      <div className="col-md-12 container">
        {// console.log(this.props.events.filter((item) => item.id == this.props.match.params.eventId))
        this.props.events
          .filter(item => item.id == this.props.match.params.eventId)
          .map((item, index) => (
            <div key={index} className="col-md-8 eventCard">
              <div className="row innerEventCard">
                <h4>{item.event}</h4>
                <p>Category: {item.category}</p>
                <p>Date: {item.date}</p>
              </div>
              <div className="row innerEventCard">
                <p className="detailsSubheader">Location:</p>
                <p>{item.address}</p>
                <p>{item.zip}</p>
              </div>
              <div className="row innerEventCard">
                <p className="detailsSubheader">Status: </p>
                <p>{ this.getEventStatus(item.id) }</p>
                <p className="detailsSubheader">Details:</p>
                <p>Minimum number of players needed: {item.minPlayersNeeded}</p>
                <p>Maximum number of players needed: {item.maxPlayersNeeded}</p>
              </div>
              <div className="row innerEventCard">
                <p className="message">{item.message}</p>
                {/* <Link to={'/eventdetails/' + item.id}><button id="btnJoin" className="btn btn-success">More Info</button></Link> */}
                <button id="btnJoin" className="btn btn-success btnPadding" onClick={ this.joinEvent.bind(this) }>
                  Join the Event
                </button>
              </div>
            </div>
          ))}

          <div className="col-md-12 container">
            <h3>Players</h3>
            <div className="col-md-12 container">
                { this.displayAttendees(this.props.match.params.eventId) }
            </div>
          </div>
      </div>
    );
  }

  joinEvent(e) {
    // Add the user
    console.log(this.props.loggedInUser);
    if (this.props.loggedInUser.length > 0) {
      
      // User is logged in. Join the user to the event
      console.log("Join userID " + this.props.loggedInUser[0].id + " to eventID " + this.props.match.params.eventId);

      // Make sure the user isn't already joined to the event


      // If user is not, then add the userID/eventID association to the event
      var participantArr = this.props.participants.concat( {
        userId: this.props.loggedInUser[0].id,
        eventID: this.props.match.params.eventId
      }
      )

      this.props.addAttendee(participantArr);

      // Update the number of participants. Subtract by max by one

    }
    else {
      // User is not logged in. Redirect to login
      console.log("Login the user");
      
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
    addAttendee: attendee => dispatch(joinEvent(attendee))
  }
}


export default connect(MapStateToProps, MapDispatchToProps)(Home);
