import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Link, Switch, Route } from 'react-router-dom'

import axios from 'axios'
import {loadOtherEvents} from '../redux/actions'
import {updateEventsLoadFlag} from '../redux/actions'

class EventList extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            filterBy: ""
        }
    }

    componentDidMount() {
        // Get events from the local json file

        if (this.props.loadedEventsJsonFile == false) {
        axios.get('http://localhost:8080/data/events.json')
            .then(response => {
                // console.log(response.data.events);

                // Add the events from the json file into the current array in redux state
                var loadEventsArr = this.props.events.slice();

                // Loop through the json file and push the object into the array
                for (let i = 0; i < response.data.events.length; i++) {
                    // console.log(response.data.events[i]);
                    loadEventsArr.push(response.data.events[i]);
                }
                
                // console.log(loadEventsArr);
                
                this.props.loadEvents(loadEventsArr);

                // set flag to true so the json data doesn't load more than once
                this.props.updateFlag(true);
                
            })
        }

    }

    render() { 
        return (
            <div className="col-md-12 container">
                <div className="col-md-12 container pull-right">
                    <label htmlFor="selectFilter">Narrow my results:</label>
                    <select name="filterResults" id="selectFilter" onChange={ (e) => this.setState({ filterBy: e.target.value }) }>
                        <option value="" disabled defaultValue hidden>Please Choose...</option>
                        <option>All Events</option>
                        <option>Football</option>
                        <option>Baseball</option>
                        <option>Basketball</option>
                        <option>Soccer</option>
                        <option>Kickball</option>
                        <option>Golf</option>
                        <option>Ping Pong</option>
                        <option>Hockey</option>
                        <option>Tennis</option>
                        <option>Beer Pong</option>
                    </select>
                    {/* <button id="btnFilter" className="btn btn-primary btn-xs btnPadding" onClick={ this.filterResults }>Go</button> */}
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
            <div key={ index } className="col-md-8 eventCard">
                <div className="row innerEventCard">
                    <h4>{ item.event }</h4>
                    <p>Category: { item.category }</p>
                    <p>Date: { item.date }</p>                             
                </div>
                <div className="row innerEventCard">                                
                    <p className="detailsSubheader">Location:</p>
                    <p>{ item.address }</p>
                    <p>{ item.zip }</p>
                </div>
                <div className="row innerEventCard">                                
                    <p className="detailsSubheader">Status: </p>
                    { this.getEventStatus(item.id) }  {item.status}
                </div>
                <div className="row innerEventCard">
                    <Link to={'/eventdetails/' + item.id}><button id="btnMoreInfo" className="btn btn-success">More Info</button></Link>
                    {/* <button id="btnJoin" className="btn btn-info btnPadding">Join the Game</button> */}                    
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
        loadedEventsJsonFile: state.loadedEventsJsonFile,
        loggedInUser: state.loggedInUser
    }
}

const MapDispatchToProps = dispatch => {
    return {
        loadEvents: events => dispatch(loadOtherEvents(events)),
        updateFlag: flag => dispatch(updateEventsLoadFlag(flag))
    }
}


export default connect(MapStateToProps,MapDispatchToProps)(EventList)
