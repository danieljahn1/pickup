import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        this.state ={}
    }
    return (){
        render(
        <div>
            <img src={props.image} id="profile-avatar" alt="Image for Profile"></img>
            <h1>User Profile: {props.person.name}</h1>
            <div className="Gender">{props.gender}</div>
            <div className="Birthday">{props.birthday}</div>
            <div className="Location">{props.location}</div>
        </div>
        )
    }
}

export default Profile