import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Menu from './menu'


class NavBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="col-md-12">
                <nav className="navbar navbar-default navbar-fixed-top" id="nav-bar">
                    {/* <img src="../public/images/pickUp_logo.png" alt="Company Logo"/> */}
                    <Link to="/"><span className="navbar-brand" href="#" id="nav-bar-text">pickUp</span></Link>
                    <Menu />
                </nav>
            </div>
        )
    }
}

export default NavBar
