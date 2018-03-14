import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import uniqid from 'uniqid'

import NavAnon from './nav-anon'
import NavKnown from './nav-known'
import Title from './title'
import Home from './home'
import SignUp from './sign-up'
import Welcome from './welcome'
import EventCreate from './event-create'
import EventList from './event-list'
import Event from './event'
import TestRedux from './testredux'



class Container extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <div className="container-fluid">
                    <NavAnon />
                    {/* <NavKnown /> */}
                    <Title title="Pickup App" />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/signup' render={() => <SignUp />} />
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
