import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Welcome extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-10 welcome welcome-user">
                    <h2>Welcome, {this.props.loggedInUser[0].name} . . .</h2>
                </div>
                <div className="col-md-10 pull-right welcome welcome-find-event">
                    <p className="lead home-message" >With events being created daily, there's no limit on the new friends and experiences that can be had with joining an event. Try it today!</p>
                    <Link to="/viewevents"><button className="btn btn-success btn-lg pull-right">Find Events To Join</button></Link>
                </div>
                <div className="col-md-10 pull-left welcome welcome-create-event">
                    <p className="lead home-message" >Have an awesome idea for an event? Looking to broaden your skills with new competition? Creating an event can not only help your event planning abilities, but extends your circle of sports friends. Try starting an event and see how good you really are!</p>     <Link to="/createevent"><button className="btn btn-warning btn-lg pull-right">Start A New Event</button></Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser,
    }
}

export default connect(mapStateToProps)(Welcome)
