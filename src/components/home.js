import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import axios from 'axios'

import {loadOtherEvents} from '../redux/actions'
import {loadOtherUsers} from '../redux/actions'
import {loadOtherParticipants} from '../redux/actions'
import {updateEventsLoadFlag} from '../redux/actions'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // Get events from the local json file for more data

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

            axios.get('http://localhost:8080/data/users.json')
                .then(response => {
                    // console.log(response.data.users);
                    // Add the users from the json file into the current array in redux state
                    var loadUsersArr = this.props.usersArr.slice();

                    // Loop through the json file and push the object into the array
                    for (let i = 0; i < response.data.users.length; i++) {
                        loadUsersArr.push(response.data.users[i]);
                    }
                    // console.log(loadUsersArr);

                    this.props.loadOtherUsers(loadUsersArr);                
                })

            axios.get('http://localhost:8080/data/participants.json')
                .then(response => {
                    // console.log(response.data.participants);
                    // Add the participants from the json file into the current array in redux state
                    var loadParticipantsArr = this.props.participants.slice();

                    // Loop through the json file and push the object into the array
                    for (let i = 0; i < response.data.participants.length; i++) {
                        loadParticipantsArr.push(response.data.participants[i]);
                    }
                    // console.log(loadParticipantsArr);

                    this.props.loadOtherParticipants(loadParticipantsArr);
                })
        }

    }

    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-6" id="home" >
                    <p className="lead home-message" >Our goal at <b>pickUp</b> is to make playing all your favorite sports and activites as seamless as possible. We want to make it easy for you to find events to join and discover new friends along the way.</p>
                    <Link to="/signup"><button className="btn btn-lg btn-success btn-block"><h2>Join pickUp today!</h2></button></Link>
                </div>
            </div>
        )
    }
}

const MapStateToProps = state => {
    return {
        events: state.events,
        participants: state.participants,
        loadedEventsJsonFile: state.loadedEventsJsonFile,
        // loggedInUser: state.loggedInUser,
        usersArr: state.usersArr,
        participants: state.participants
    }
}

const MapDispatchToProps = dispatch => {
    return {
        loadEvents: events => dispatch(loadOtherEvents(events)),
        updateFlag: flag => dispatch(updateEventsLoadFlag(flag)),
        loadOtherUsers: users => dispatch(loadOtherUsers(users)),
        loadOtherParticipants: participants => dispatch(loadOtherParticipants(participants))
    }
}


export default connect(MapStateToProps,MapDispatchToProps)(Home)
