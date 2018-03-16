import React, { Component } from 'react'
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
        }
    }

    render() {
        return (
            <div>
                {/* <Profile person={this.state.person} /> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="">
                                <div className="user-profile">
                                    <div className="row">
                                        <div className="col-md-12 lead">Your Profile</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 text-center">
                                            <img className="img-circle avatar avatar-original" src={this.props.loggedInUser[0].imageurl} style={{ width: '200px' }} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="row">
                                                <div className="col-md-12" style={{ marginLeft: '50px' }}>
                                                    <h1 className="only-bottom-margin">{this.props.loggedInUser[0].name}</h1>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6" style={{ marginLeft: '50px' }}>
                                                    <span className="text-white">Gender: </span>{this.props.loggedInUser[0].gender}<br />
                                                    <span className="text-white">Birthday: </span>{this.props.loggedInUser[0].dob}<br />
                                                    <span className="text-white">Zip: </span>{this.props.loggedInUser[0].zip}<br />
                                                    <span className="text-white">Email: </span>{this.props.loggedInUser[0].email}<br />
                                                    <span className="text-white">Password: </span>************<br />
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
        )
    }
}
const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser,
    }
}

export default connect(mapStateToProps)(UserProfile)