import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { userUpdate } from '../redux/actions'
import { userLogIn } from '../redux/actions'


class UserProfile extends Component {
    constructor(props) {
        super(props);
        
        var currentId = this.props.loggedInUser[0].id
        var currentName = this.props.loggedInUser[0].name
        var currentDob = this.props.loggedInUser[0].dob
        var currentGender = this.props.loggedInUser[0].gender
        var currentZip = this.props.loggedInUser[0].zip
        var currentEmail = this.props.loggedInUser[0].email
        var currentPassword = this.props.loggedInUser[0].password
        var currentImageurl = this.props.loggedInUser[0].imageurl

        this.state = {
            id: currentId,
            name: currentName,
            dob: currentDob,
            gender: currentGender,
            zip: currentZip,
            email: currentEmail,
            password: currentPassword,
            imageurl: currentImageurl,
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
                                            <img className="img-circle avatar avatar-original" src={this.props.loggedInUser[0].imageurl} style={{ width: '100px' }} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="row">
                                                <div className="col-md-12" style={{ marginLeft: '50px' }}>
                                                    <h1 className="only-bottom-margin">{this.props.loggedInUser[0].name}</h1>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-10" style={{ marginLeft: '50px' }}>
                                                    <form>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" id="edit-name" autoComplete="name" placeholder="Full Name" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} required />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" id="edit-dob" autoComplete="birthdate" placeholder="Date of Birth" value={this.state.dob} onChange={(e) => { this.setState({ dob: e.target.value }) }} disabled />
                                                            <small className="form-text" id="edit-dob-help">Birth Date</small>
                                                        </div>
                                                        <div className="form-group">
                                                            <select type="gender" className="form-control" id="edit-gender" autoComplete="sex" value={this.state.gender} onChange={(e) => { this.setState({ gender: e.target.value }) }}>
                                                                <option defaultValue>Gender...</option>
                                                                <option>Male</option>
                                                                <option>Female</option>
                                                                <option>Prefer not to answer</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" pattern="[0-9]{5}" className="form-control" id="edit-zip" autoComplete="postal-code" placeholder="Zip Code" value={this.state.zip} onChange={(e) => { this.setState({ zip: e.target.value }) }} required />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="email" className="form-control" id="edit-mail" autoComplete="email" placeholder="Email" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} required />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="password" pattern=".{8,}" className="form-control" id="edit-password" autoComplete="new-password" placeholder="Password" value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }} required />
                                                            <small className="form-text" id="edit-password-help">Must be at least 8 characters long.</small>
                                                        </div>
                                                    </form>
                                                    {/* <span>Gender: </span><b>{this.props.loggedInUser[0].gender}</b><br />
                                                    <span>Birthday: </span><b>{this.props.loggedInUser[0].dob}</b><br />
                                                    <span>Zip: </span><b>{this.props.loggedInUser[0].zip}</b><br />
                                                    <span>Email: </span><b>{this.props.loggedInUser[0].email}</b><br />
                                                    <span>Password: </span><b>************</b><br /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button className="btn btn-default pull-right" onClick={this.userUpdate.bind(this)}><i className="glyphicon glyphicon-pencil"></i> Edit</button>
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
                                {this.getGames("Participant")}
                            </div>
                            <div className="row user-profile-allevents">
                                <h4>Events I Created</h4>
                                {this.getGames("Organizer")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    userUpdate() {
        var userObjOfArr = this.props.usersArr.filter(item => item.id == this.props.loggedInUser[0].id);
        var index = this.props.usersArr.indexOf(userObjOfArr[0]);
        
        var usersArrCopy = this.props.usersArr.slice();
        usersArrCopy.splice(index, 1, this.state);
        
        this.props.userUpdateRedux(usersArrCopy)
        this.props.loggedInUserUpdate(userObjOfArr)

        console.log(usersArrCopy)
        console.log(userObjOfArr)
        console.log(index)
        // console.log(this.props.usersArr)
    }


    getGames(eventType) {
        // Retrieve the events the user signed up for/organized
        var noEventsMsg = "";
        var signedUpEvents = [];
        if (eventType == "Participant") {
            // Get the events from the participants array
            signedUpEvents = this.props.participants.filter(item => item.userId == this.props.loggedInUser[0].id);
        }
        else {
            // Get the events from the organizers array
            signedUpEvents = this.props.organizers.filter(item => item.userId == this.props.loggedInUser[0].id);
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
            var eventsCopy = this.props.events.filter(item => item.id == signedUpEvents[i].eventID);
            displayEvents.push(eventsCopy[0]);
        }

        // console.log(displayEvents);
        // Display the events from the temp array
        return displayEvents.map((item, index) =>
            <div key={index}>
                <Link to={'/eventdetails/' + item.id}>
                    <div className="user-profile-signedup list-group col-md-12">
                        <div className="col-md-2 user-profile-align">{this.formatDate(item.date)}</div>
                        <div className="col-md-3">&nbsp;{item.category}</div>
                        <div className="col-md-7"> {item.event}.  {item.venue}</div>
                    </div>
                </Link>
            </div>
        )

    }

    formatDate(d) {
        // Format the date from yyyy-mm-dd into MM/dd/yyyy for display
        var year = d.substr(0, 4);
        var month = d.substr(5, 2);
        var day = d.substr(8, 2)

        var date = month + '/' + day + '/' + year;
        return date;
    }

}
const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser,
        usersArr: state.usersArr,
        events: state.events,
        participants: state.participants,
        organizers: state.organizers

    }
}

const mapDispatchToProps = dispatch => {
    return {
        userUpdateRedux: updatedUser => dispatch(userUpdate(updatedUser)),
        loggedInUserUpdate: updatedUser => dispatch(userLogIn(updatedUser)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
