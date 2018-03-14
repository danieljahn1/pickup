import React, { Component } from 'react'
import uniqid from 'uniqid'

import TestRedux from './testredux'
import Title from './title'
import NavMenu from './navmenu'
import Home from './home'
import SignUp from './sign-up'
import Welcome from './welcome'


import EventCreate from './event-create'
import EventList from './event-list'
import Event from './event'

import { Link, Switch, Route } from 'react-router-dom'




class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {            
        }
    }

    render() {
        return(
            <div className="container">
                
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
                </div>
            </div>
        )
    }
}

export default Container
