import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Link, Switch, Route } from 'react-router-dom'

import axios from 'axios'

class EventList extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            filterBy: ""
        }
    }

    render() { 
        return (
            <div className="col-md-12 container" id="eventdetailsbg">
                <div className="col-md-12 container-fluid pull-right">
                    <label htmlFor="selectFilter" className="narrowResults">Narrow my events:</label>
                    <select name="filterResults" id="selectFilter" onChange={ (e) => this.setState({ filterBy: e.target.value }) }>
                        <option value="" disabled defaultValue hidden>Please Choose...</option>
                        <option>All Events</option>
                        <option>Basketball</option>
                        <option>Beer Pong</option>
                        <option>Cycling</option>
                        <option>Flag Football</option>
                        <option>Golf</option>
                        <option>Hiking</option>
                        <option>Hockey</option>
                        <option>Kickball</option>
                        <option>Tennis</option>
                        <option>Ping Pong</option>
                        <option>Running</option>
                        <option>Soccer</option>
                        <option>Softball</option>
                        <option>Tennis</option>
                        <option>Walking</option>
                    </select>
                    {/* <button id="btnFilter" className="btn btn-primary btn-xs btnPadding" onClick={ this.filterRescults }>Go</button> */}
                </div>
                {                
                    // Display the events based on the drop down
                    this.displayEvents()   
                }
            </div>
        )
    }

    displayEvents() {
        // Display the events based on the drop down list
        // On the initial page load, display all events
        // If state.filterBy is empty or "All Events" is selected, then display everything. Otherwise filter events by the chosen item

        // Create a copy of the store's events array
        var eventsArr = this.props.events.slice();
        
        if (this.state.filterBy != "" && this.state.filterBy != "All Events") {
            // Filter the array by the selected event category
            eventsArr = eventsArr.filter( (item) => item.category == this.state.filterBy  );  
            // console.log("filter by " + this.state.filterBy);
        }
        
        if (eventsArr.length == 0) {
            // No events found. Display a message
            return <div className="col-md-8 eventCard">No events found.</div>
        }

        return eventsArr.map( (item, index) =>            
            <div key={ index } className="col-md-12 eventCard">
                <div className="col-md-1">
                    <div className="row innerEventCard">
                        <p>{ item.date }</p>
                    </div>
                </div>
                <div className="col-md-6">                    
                    <div className="row innerEventCard">
                        <p className="eventCategory">{ item.category }</p>            
                        <Link to={'/eventdetails/' + item.id}><h3 className="eventName divLink">{ item.event }</h3></Link>                                                  
                    </div>
                    <div className="row innerEventCard">                                
                        <p>{ item.venue }</p>
                    </div>
                    <div className="row innerEventCard">
                        <Link to={'/eventdetails/' + item.id}><button id="btnMoreInfo" className="btn btn-success">More Info</button></Link>                 
                    </div>
                </div>
                <div className="col-md-3">
                <div className="row innerEventCard">&nbsp;</div>
                    <div className="row innerEventCard">
                        <p className="detailsSubheader">Status: </p>
                        { this.getEventStatus(item.id) }  {item.status}
                    </div>
                </div>
                
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

        // Set the event's status. If max number of players is not zero, status is open
        let status = "Closed";
        let eventCopy =  this.props.events.filter(item => item.id == eventID );
        
        // if (eventIDCounter < eventCopy[0].maxPlayersNeeded) {
        if (eventCopy[0].maxPlayersNeeded > 0) {
            // console.log("Number of participants: " + eventIDCounter);
            status = "Open. " + eventIDCounter + " people playing.";
        }        

        // console.log("Number of participants: " + eventIDCounter);
        return status;
        
    }

}

const MapStateToProps = state => {
    return {
        events: state.events,
        participants: state.participants,
        loadedEventsJsonFile: state.loadedEventsJsonFile,
        loggedInUser: state.loggedInUser,
        usersArr: state.usersArr,
        participants: state.participants
    }
}

// const MapDispatchToProps = dispatch => {
//     return {
//         // loadEvents: events => dispatch(loadOtherEvents(events)),
//         // updateFlag: flag => dispatch(updateEventsLoadFlag(flag)),
//         // loadOtherUsers: users => dispatch(loadOtherUsers(users)),
//         // loadOtherParticipants: participants => dispatch(loadOtherParticipants(participants))
//     }
// }


export default connect(MapStateToProps)(EventList)
