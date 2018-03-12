import React, { Component } from 'react'
import $ from 'jquery'


class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addName: '',
            addDob: '',
            addGender: '',
            addCity: '',
            addState: '',
            addEmail: '',
            addPassword: '',
        }
    }

    submitAndClear() {
        this.setState(
            this.props.signUpClick.bind(this, this.state)
        )
        this.setState({
            addName: '',
            addDob: '',
            addGender: '',
            addCity: '',
            addState: '',
            addEmail: '',
            addPassword: '',
        })
    }

    render() {
        return (
            <div className="col-md-12">
                <h2>Join in on the action now!</h2>
                <form className="col-md-6">
                    <div className="form-group">
                        {/* <label htmlFor="name">Name</label> */}
                        <input type="text" className="form-control" id="name" autoComplete="name" placeholder="Full Name" value={this.state.addName} onChange={(e)=> {this.setState({addName: e.target.value})}} required/>
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="dob">Date of Birth</label> */}
                        <input type="date" className="form-control" id="dob" autoComplete="birthdate" value={this.state.addDob} onChange={(e)=> {this.setState({addDob: e.target.value})}}/>
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="gender">Gender</label> */}
                        <select type="gender" className="form-control" id="gender" autoComplete="gender" value={this.state.addGender} onChange={(e)=> {this.setState({addGender: e.target.value})}}>
                            <option defaultValue>Gender...</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Prefer not to answer</option>
                        </select>
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="city">City</label> */}
                        <input type="text" className="form-control" id="city" autoComplete="city" placeholder="City" value={this.state.addCity} onChange={(e)=> {this.setState({addCity: e.target.value})}}/>
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="state">State</label> */}
                        <input type="text" className="form-control" id="state" autoComplete="state" placeholder="State" value={this.state.addState} onChange={(e)=> {this.setState({addState: e.target.value})}}/>
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="email">Email</label> */}
                        <input type="email" className="form-control" id="newEmail" autoComplete="email" placeholder="email@address.com" value={this.state.addEmail} onChange={(e)=> {this.setState({addEmail: e.target.value})}} required/>
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="password">Password</label> */}
                        <input type="password" className="form-control" id="newPassword" autoComplete="new-password" placeholder="Password" value={this.state.addPassword} onChange={(e)=> {this.setState({addPassword: e.target.value})}} required/>
                        <small id="newPasswordHelp" className="form-text text-muted">Must be 8-20 characters long.</small>
                    </div>

                    <small className="form-text text-muted">By Signing Up, you agree to our Terms of Use and Privacy Policy</small>
                    <input type="submit" className="btn btn-warning btn-block submit-button" value="Sign Up" onClick={this.submitAndClear.bind(this)}/>
                </form>
            </div>
        )
    }
}

export default SignUp
