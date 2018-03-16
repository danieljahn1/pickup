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
                    <p className="lead home-message" >Our goal at <b>pickUp</b> is to make playing all your favorite sports and activites as seamless as possible. We want to make it easy for you to find events to join and discover new friends along the way.</p>
                    <Link to="/signup"><button className="btn btn-lg btn-success btn-block"><h2>Join pickUp today!</h2></button></Link>
                </div>
            </div>
        )
    }
}

export default Home
