import React, { Component } from 'react';

import TestRedux from './testredux'
import Title from './title'
import NavMenu from './navmenu'
import SignIn from './sign-in'
import SignUp from './sign-up'

class Container extends Component {
    constructor(props) {
        super(props)
    }

    signUp (user) {

    }


    render() {
        return(
            <div>
                <div className="container-fluid">
                    <NavMenu />
                    <Title title="Pickup App" />
                    <SignIn />
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
