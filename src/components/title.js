import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Title extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="col-md-12">
                <h1>{this.props.title}</h1>
                <nav className="navbar navbar-default navbar-custom navbar-fixed-top" id="navBar">
                    <div className="navbar-header page-scroll">
                        <a className="navbar-brand" href="index.html" id="pick">PickUp</a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Title
