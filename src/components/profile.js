import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        this.state = {}
    }
    return() {
        render(
            <div>
                <img src={props.image} id="profile-avatar" alt="Image for Profile"></img>
                <h1>User Profile: {props.person.name}</h1>
                <div class="form-control">
                    <label class="header">Profile Photo:</label>

                    <input id="image" type="file" name="profile_photo" placeholder="Photo" required="" capture></input>
                </div>
                <div className="Gender">{props.gender}</div>
                <div className="Birthday">{props.birthday}</div>
                <div className="Location">{props.location}</div>
            </div>
        )
    }
}

export default Profile