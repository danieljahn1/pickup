import React, { Component } from 'react';


class NavMenu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="col-md-3 pull-right">
                Sign In .  Sign Up.  Browse Events.
            </div>
        )
    }
}

export default NavMenu
