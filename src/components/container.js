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
<<<<<<< HEAD
                
                <div className="container-fluid" id='image'>
                    <NavMenu />
                    <Title />
                    
                    {/* <SignIn signInClick={this.signIn.bind(this)}/> */}
                    {/* <SignUp /> */}
                    {/* <Welcome/> */}


                </div>

                <div className="container-fluid">
                    {/* Page content/componenent go here */}
                    {/* Check out Pickup, the app that allows you to find a game near you. */}

                    {/* <TestRedux /> */}
                    <Switch>
                        <Route exact path='/' component={ Home } />
                        <Route path='/signup' render={() => <SignUp /> } />
                        <Route path='/welcome' component={ Welcome } />
                        <Route path='/createevent' component= { EventCreate } />
                        <Route path='/viewevents' component= { EventList } />
                        <Route path='/eventdetails/:eventId' component={ Event } />
                    </Switch>
                    {/* <EventList /> */}
=======
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
>>>>>>> 2c91e90997e7c4349750ee677dda44081a66b111
                </div>
            </div>
        )
    }
}

export default Container
