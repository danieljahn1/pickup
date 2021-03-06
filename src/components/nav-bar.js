import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Menu from './menu'


class NavBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        if (this.props.loggedInUser.length == 0) {
            return (
                <div className="col-md-12">
                    <nav className="navbar navbar-default navbar-fixed-top" id="nav-bar">
                        <Link to="/"><img className="logo" src="../../images/pickUp_logo_orange_green.png" alt="Company Logo" /></Link>
                        {/* <Link to="/"><span className="navbar-brand" href="#" id="nav-bar-text">pickUp</span></Link> */}
                        <Menu />
                    </nav>
                </div>
            )
        } else {
            return (
                <div className="col-md-12">
                    <nav className="navbar navbar-default navbar-fixed-top" id="nav-bar">
                        <Link to="/welcome"><img className="logo" src="../../images/pickUp_logo_orange_green.png" alt="Company Logo" /></Link>
                        {/* <Link to="/"><span className="navbar-brand" href="#" id="nav-bar-text">pickUp</span></Link> */}
                        <Menu />
                    </nav>
                </div>
            )
        }

    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser,
    }
}

export default connect(mapStateToProps)(NavBar)
