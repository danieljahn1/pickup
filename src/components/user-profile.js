import React, { Component } from 'react';
import Profile from './profile'

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        person: {
                name: '',
                gender: '',
                birthday: '',
                location: '',
                image: '',
        }

        };
    }
    render() {
        return (
            <div className="App">
                <Profile person={this.state.person} />
            </div>
        );
    }
}

export default UserProfile;