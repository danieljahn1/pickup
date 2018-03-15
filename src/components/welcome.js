import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Welcome extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-12">
                    {/* <h3>Welcome {this.props.loggedInUser[0].name}</h3> */}
                </div>
                <div className="col-md-6">
                    <Link to="/createevent"><button className="btn btn-lg">Start A New Event</button></Link>
                </div>
                <div className="col-md-6">
                    <Link to="/viewevents"><button className="btn btn-lg">Find Events To Join</button></Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser,
    }
}

export default connect(mapStateToProps)(Welcome)
