import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import uniqid from 'uniqid'

import NavBar from './nav-bar'
import Home from './home'
import SignUp from './sign-up'
import SignIn from './sign-in'
import Welcome from './welcome'
import EventCreate from './event-create'
import EventList from './event-list'
import Event from './event'
import TestRedux from './testredux'
import NavAnon from './nav-anon';



class Container extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <div className="nav-bar-div">
                    <NavBar />
                </div>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/signup' component={SignUp} />
                        <Route path='/signin' component={SignIn} />
                        <Route path='/welcome' component={Welcome} />
                        <Route path='/createevent' component={EventCreate} />
                        <Route path='/viewevents' component={EventList} />
                        <Route path='/eventdetails/:eventId' component={Event} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Container
