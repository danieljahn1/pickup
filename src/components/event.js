import React, { Component } from 'react';

import { connect } from 'react-redux';
import { updateMaxPlayers } from '../redux/actions'
import { Link, Redirect } from 'react-router-dom'

import { joinEvent } from '../redux/actions'

import { joinEventAnon } from '../redux/actions'

class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      redirect: false,
      joinButtonDisabled: false,
      eventStatus: ''
     }
    // console.log(this.props.match.params.eventId);
  }

  componentDidMount() {
    // Get event's status
    this.getEventStatus(this.props.match.params.eventId);
  
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      // If the user is not logged in, redirect them to the signup page
        return <Redirect to="/signin" />
    }
    return (
      <div className="col-md-12 container-fluid" id="eventdetailsbg">
        <div className="pull-right">
          <Link to="/viewevents"><button id="btnBack" className="btn btn-info btn-sm">Back to Events</button></Link>
        </div>

        {// console.log(this.props.events.filter((item) => item.id == this.props.match.params.eventId))
        
          this.props.events
            .filter(item => item.id == this.props.match.params.eventId)
            .map((item, index) => (
              <div className="col-md-12" key={index}>
                <div className="col-md-6 eventdetail-left">
                  <div className="row innerEventCard">
                    <h4>{item.date}</h4>
                    <h4>{item.event}</h4>
                    {/* <p>Category: {item.category}</p> */}
                    
                  </div>
                  <div className="row innerEventCard">
                    <p className="detailsSubheader">Details:</p>                
                    <p className="message">{item.message}</p>
                    
                    {/* <div className="row innerEventCard"> */}
                      <p className="detailsSubheader">Status: </p>
                      <p className="message">{ this.state.eventStatus }</p>                
                    {/* </div> */}
                    
                    <p>Minimum number of players needed: {item.minPlayersNeeded}</p>
                    <p>Players still needed: {item.maxPlayersNeeded}</p>
                  </div>
                  <div className="row innerEventCard">
                    <button id="btnJoin" className="btn btn-success btnPadding" disabled={this.state.joinButtonDisabled} onClick={ this.submitJoinEvent.bind(this) }>
                      Join the Event
                    </button>
                  </div>
                </div>
                
                <div className="col-md-4 eventCard">
                  <div className="row innerEventCard">
                    <p className="detailsSubheader">{item.venue}</p>                    
                    <p>{item.address} {item.zip}</p>

                    <img src={ this.getMap(item.address, item.zip) } className="img-responsive" />
                    {/* { this.getMap(item.address, item.zip) } */}
                  </div>
                                  
                </div>
              </div>
            ))
        }

          <div className="col-md-12 container-fluid playersContainer">
            <div className="playersHeader"><h3 className="playerTitle">Players</h3></div>        
            <div className="col-md-12 container-fluid attendeesContainer">
                { this.displayAttendees(this.props.match.params.eventId) }
            </div>
          </div>
      </div>
    );
  }

  getMap(address, zipCode) {
    // Piece together the API URL in order to display the static map. Return the URL
    const mapquestKey = "W9pxDBj1ipgcPfMKN4dnxOkpoPHpknHN";
    var url = "https://www.mapquestapi.com/staticmap/v5/map?key=" + mapquestKey;
    url += "&type=map&zoom=16&size=@2x&locations=";

    // Replace spaces with a plus sign
    address = address.replace(/ /g, "+");
    url += address + "+" + zipCode;

    // console.log(url);
    return url;
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

          // If the max players is 0, then disable the "Join Now" button
          if (getEventCopy[0].maxPlayersNeeded == 0) {
            this.setState({
              eventStatus: "This event is full.",
              joinButtonDisabled: true
            })
          }
        }
      }
      

    }
    else {
      // User is not logged in. Redirect to sign up page
      // Set eventId as lastEventViewed in redux

      var eventLastViewedCopy = this.props.eventLastViewed.slice();
      eventLastViewedCopy.splice(0,1,this.props.match.params.eventId);

      this.props.setEventViewedFlag(eventLastViewedCopy);

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
    console.log(players);
    
    // Create the participating players' cards
    if (players.length == 0) {
      // No players. Display a message
      return <div className="col-md-6">
          <p>Be the first one to join! No players are signed up for this event.</p>  
        </div>
    }

    return players.map ( (item, index) =>
        <div className="col-md-2 row playerCard" key={index}>
          {/* <img src="../../images/anon-player.jpg" width="75" className="img-circle img-responsive" /> */}
          <img src={ item.imageurl } width="75" className="img-circle img-responsive playersImage" />
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

      // Set the event's status. If  max number of players is zero, status is open
      let status = "This event is full.";
      let eventCopy =  this.props.events.filter(item => item.id == eventID );
      
      if (eventCopy[0].maxPlayersNeeded > 0) {
        // Number of players attending is less than the max, status is open
        // console.log("Number of participants: " + eventIDCounter);
        status = "Open";
      }
      else {
        // Event is closed. Disable the "Join Now" button
        this.setState({
          joinButtonDisabled: true
        })
      }

      // Update the status in state
      this.setState( {
        eventStatus: status
      })

      // console.log("Number of participants: " + eventIDCounter);
      return status;
      
  }

}

const MapStateToProps = state => {
  return {
    events: state.events,
    participants: state.participants,
    usersArr: state.usersArr,
    loggedInUser: state.loggedInUser,
    eventLastViewed: state.eventLastViewed,
  }
}

const MapDispatchToProps = dispatch => {
  return {
    addParticipant: attendee => dispatch(joinEvent(attendee)),
    setEventViewedFlag: eventId => dispatch(joinEventAnon(eventId)),
  }
}



export default connect(MapStateToProps, MapDispatchToProps)(Home);
