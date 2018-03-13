import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Welcome extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-4">
                    <Link to="/createevent"><button className="btn btn-lg">Start A New Event</button></Link>
                </div>
                <div className="col-md-4">
                    <Link to="/viewevents"><button className="btn btn-lg">Find Events To Join</button></Link>
                </div>
            </div>
        )
    }
}

export default Welcome
