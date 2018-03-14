import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'



class NavKnown extends Component {
    constructor(props) {
        super(props)

        this.state = {
            verifyEmail: '',
            verifyPassword: '',
            redirect: false,
        }
    }

    logout() {

    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/" />
        }
        return (
            <nav className="col-md-6 pull-right">
                <button type="button" className="btn btn-link pull-right" onClick={this.logout.bind(this)}>LOG OUT</button>
                <Link to="/createevent"><button className="btn btn-link pull-right">CREATE EVENTS</button></Link>
                <Link to="/viewevents"><button className="btn btn-link pull-right">VIEW EVENTS</button></Link>
                <div className="pull-right">
                    {/* Welcome, {this.props.loggedInUser[0].name} */}
                </div>
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
        sendToRedux: logInUser => dispatch(userAuth(logInUser)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavKnown)
