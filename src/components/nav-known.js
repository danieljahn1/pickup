import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { userLogOut } from '../redux/actions'


class NavKnown extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // redirect: false,
        }
    }

    logout() {
        var loggedInUserCopy = this.props.loggedInUser.slice();
        loggedInUserCopy.splice(0,1)

        this.props.sendToRedux(loggedInUserCopy);
        this.props.history.push("/signup");
        // this.setState({ redirect: true });
        
    }

    render() {
        // const { redirect } = this.state;
        // if (redirect) {
        //     return <Redirect to="/signup" />
        // }
        return (
            <nav className="col-md-6 pull-right nav-links">
                <button type="button" className="btn btn-link pull-right" onClick={this.logout.bind(this)}>Logged in as, {this.props.loggedInUser[0].email}</button>
                <Link to="/createevent"><button className="btn btn-danger pull-right">CREATE EVENTS</button></Link>
                <Link to="/viewevents"><button className="btn btn-danger pull-right">VIEW EVENTS</button></Link>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser,
        usersArr: state.usersArr,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendToRedux: logOutUser => dispatch(userLogOut(logOutUser)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavKnown))
