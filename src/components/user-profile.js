import React, { Component } from 'react';
import Profile from './profile'
import SignUp from './signup'
// import Profile from './profile'
import { connect } from 'react-redux'

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
                {/* <Profile person={this.state.person} /> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-md-12 lead">YNour Profile</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 text-center">
                                            <img className="img-circle avatar avatar-original"  src="http://robohash.org/sitsequiquia.png?size=120x120" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h1 className="only-bottom-margin">{this.props.loggedInUser[0].name}</h1>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <span className="text-muted">Gender: </span>{this.props.loggedInUser[0].gender}<br/>
                                                            <span className="text-muted">Birthday:</span>{this.props.loggedInUser[0].dob}<br/> 
                                                                <span className="text-muted">Zip:</span>{this.props.loggedInUser[0].zip}<br/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button className="btn btn-default pull-right"><i className="glyphicon glyphicon-pencil"></i> Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser,
    }
}

export default connect (mapStateToProps) (UserProfile);