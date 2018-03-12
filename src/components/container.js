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
                zip: '92689',
                email: 'aanderson@email.com',
                password: 'abc123',
            },{
                id: uniqid(),
                name: 'Lewis Aguilar',
                dob: '',
                gender: 'Male',
                zip: '92868',
                email: 'laguilar@email.com',
                password: 'abc123',
            },{
                id: uniqid(),
                name: 'Eric Masinas',
                dob: '',
                gender: 'Male',
                zip: '91505',
                email: 'emasinas@email.com',
                password: 'abc123',
            },{
                id: uniqid(),
                name: 'Daniel Ahn',
                dob: '',
                gender: 'Male',
                zip: '92804',
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
            zip: user.addZip,
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
                    <SignUp signUpClick={this.signUp.bind(this)}/>

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
