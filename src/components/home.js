import React, { Component } from 'react'

import axios from 'axios'

class Home extends Component {
    constructor(props) {
        super(props)
        // this.state = { }
    }

    render() {
        return (
            <div className="col-md-12 home">
                <div className="col-md-6 px-0" id="home" >
                    <p className="lead my-3" >Our goal is to make pickup seamless as possible. We want to make it easy for you to find events and discover new friends on the app.</p>
                    <p className="lead mb-0"><a className="text-white font-weight-bold" href="#">Sign up today</a></p>
                </div>
            </div>
        )
    }
}

export default Home
