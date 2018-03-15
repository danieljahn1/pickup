import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-6" id="home" >
                    <p className="lead home-message" >Our goal is to make playing your favorite activities as seamless as possible. We want to make it easy for you to find events and discover new friends on the app.</p>
                    <Link to="/signup"><button className="btn btn-lg btn-success btn-block"><h2>Sign up today!</h2></button></Link>
                </div>
            </div>
        )
    }
}

export default Home
