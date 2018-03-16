import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { userLogOut } from '../redux/actions'


class NavKnown extends Component {
    constructor(props) {
        super(props)
    }

    logout() {
        var loggedInUserCopy = this.props.loggedInUser.slice();
        loggedInUserCopy.splice(0, 1);
        this.props.sendToRedux(loggedInUserCopy);
        this.props.history.push("/signup");
    }

    render() {
        return (
            <nav className="col-md-6 pull-right nav-links">
                <button type="button" className="btn btn-success pull-right" onClick={this.logout.bind(this)}>LOG OUT, {this.props.loggedInUser[0].email} ?</button>
                <Link to="/userprofile"><button className="btn btn-warning pull-right">EDIT PROFILE</button></Link>
                <Link to="/createevent"><button className="btn btn-warning pull-right">CREATE EVENTS</button></Link>
                <Link to="/viewevents"><button className="btn btn-warning pull-right">VIEW EVENTS</button></Link>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendToRedux: logOutUser => dispatch(userLogOut(logOutUser)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavKnown))
