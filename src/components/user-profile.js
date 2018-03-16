import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                name: '',
                gender: '',
                birthday: '',
                location: '',
                image: '',
            }
        }
    }

    render() {
        return (
            <div>
                {/* <Profile person={this.state.person} /> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="">
                                <div className="user-profile">
                                    <div className="row">
                                        <div className="col-md-12 lead">Your Profile</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 text-center">
                                            <img className="img-circle avatar avatar-original" src={this.props.loggedInUser[0].imageurl} style={{ width: '200px' }} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="row">
                                                <div className="col-md-12" style={{ marginLeft: '50px' }}>
                                                    <h1 className="only-bottom-margin">{this.props.loggedInUser[0].name}</h1>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6" style={{ marginLeft: '50px' }}>
                                                    <span>Gender: </span><b>{this.props.loggedInUser[0].gender}</b><br />
                                                    <span>Birthday: </span><b>{this.props.loggedInUser[0].dob}</b><br />
                                                    <span>Zip: </span><b>{this.props.loggedInUser[0].zip}</b><br />
                                                    <span>Email: </span><b>{this.props.loggedInUser[0].email}</b><br />
                                                    <span>Password: </span><b>************</b><br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            {/* <button className="btn btn-default pull-right"><i className="glyphicon glyphicon-pencil"></i> Edit</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row container">
                        <div className="user-profile-events">
                            <div className="row">
                                <div className="col-md-12 lead">My Events</div>
                            </div>
                            <div className="row user-profile-eventsjoined">
                                <h4>Events I Am Attending</h4>
                                { this.getGames("Participant") }
                            </div>
                            <div className="row user-profile-allevents">
                                <h4>Events I Created</h4>
                                { this.getGames("Organizer") }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    getGames(eventType) {
        // Retrieve the events the user signed up for/organized
        var noEventsMsg = "";
        var signedUpEvents = [];
        if (eventType == "Participant") {
            // Get the events from the participants array
            signedUpEvents = this.props.participants.filter( item => item.userId == this.props.loggedInUser[0].id );
        }
        else {
            // Get the events from the organizers array
            signedUpEvents = this.props.organizers.filter( item => item.userId == this.props.loggedInUser[0].id );
        }
        
        // console.log(signedUpEvents);

        if (signedUpEvents.length == 0) {
            // No events. Display appropriate message and link
            if (eventType == "Participant") {
                // Show participant message
                return <div>
                    <p>You have not signed up for any events. Join an event now!</p>
                    <Link to="/viewevents"><button className="btn btn-success btn-sm pull-right">Find Events To Join</button></Link>            
                </div>
            }
            else {
                // Show organizer message
                return <div>
                    <p>You have not organized any events yet.</p>
                    <Link to="/createevent"><button className="btn btn-warning btn-sm pull-right">Start A New Event</button></Link>           
                </div>
            }            
        }

        // Get the events and display them
        // Loop through the participants or organizers filtered array. 
        // If eventID is found in events, then store into the temp array and display the events
        var displayEvents = [];
        for (var i = 0; i < signedUpEvents.length; i++) {
            // Filter the events from redux based on the eventID
            var eventsCopy = this.props.events.filter( item => item.id == signedUpEvents[i].eventID);
            displayEvents.push(eventsCopy[0]);
        }

        // console.log(displayEvents);
        // Display the events from the temp array
        return displayEvents.map( (item, index) =>  
            <div key={ index }>
                <Link to={'/eventdetails/' + item.id}>
                <div className="user-profile-signedup list-group col-md-12">
                    <div className="col-md-2 user-profile-align">{ item.date }</div>
                    <div className="col-md-3">&nbsp;{item.category}</div>
                    <div className="col-md-7"> { item.event }.  { item.venue}</div>                
                </div>
                </Link>
            </div>
        )

    }


}
const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser,
        events: state.events,
        participants: state.participants,
        organizers: state.organizers

    }
}

export default connect(mapStateToProps)(UserProfile)
