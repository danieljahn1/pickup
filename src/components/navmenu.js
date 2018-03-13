import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'


class NavMenu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="col-md-6 pull-right">
                <Link to="/"><button className="btn btn-link">HOME</button></Link>
                <Link to="/signup"><button className="btn btn-link">SIGN UP</button></Link>
                <Link to="/createevent"><button className="btn btn-link">CREATE EVENTS</button></Link>
                <Link to="/viewevents"><button className="btn btn-link">VIEW EVENTS</button></Link>
            </nav>
        )
    }
}

export default NavMenu
