import React, { Component } from 'react'
import uniqid from 'uniqid'

import TestRedux from './testredux'
import Title from './title'
import NavMenu from './navmenu'
import SignIn from './sign-in'
import SignUp from './sign-up'


class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usersArr: [{
                id: uniqid(),
                name: 'Andrew Anderson',
                dob: '',
                gender: 'Male',
                city: 'Huntington Beach',
                state: 'CA',
                email: 'aanderson@email.com',
                password: 'abc123',
            },{
                id: uniqid(),
                name: 'Lewis Aguilar',
                dob: '',
                gender: 'Male',
                city: 'Anaheim',
                state: 'CA',
                email: 'laguilar@email.com',
                password: 'abc123',
            },{
                id: uniqid(),
                name: 'Eric Masinas',
                dob: '',
                gender: 'Male',
                city: 'Cypress',
                state: 'CA',
                email: 'emasinas@email.com',
                password: 'abc123',
            },{
                id: uniqid(),
                name: 'Daniel Ahn',
                dob: '',
                gender: 'Male',
                city: 'Santa Ana',
                state: 'CA',
                email: 'dahn@email.com',
                password: 'abc123',
            }]
        }
    }

    signUp (user) {
        var usersArrCopy = this.state.usersArr.slice();
        usersArrCopy.unshift({
            id: uniqid(),
            name: user.addName,
            dob: user.addDob,
            gender: user.addGender,
            city: user.addCity,
            state: user.addState,
            email: user.addEmail,
            password: user.addPassword,
        })
        console.log(usersArrCopy);

        this.setState({
            usersArr: usersArrCopy
        })

    }

    signIn (user) {
        
    }


    render() {
        return(
            <div>
                <div className="container-fluid">
                    <NavMenu />
                    <Title title="Pickup App" />
                    {/* <SignIn signInClick={this.signIn.bind(this)}/> */}
                    {/* <SignUp signUpClick={this.signUp.bind(this)}/> */}

                </div>

                <div className="container-fluid">
                    {/* Page content/componenent go here */}
                    {/* Check out Pickup, the app that allows you to find a game near you. */}

                    {/* <TestRedux /> */}
                </div>


            </div>
        )
    }
}

export default Container
