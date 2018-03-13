import React, { Component } from 'react'
import $ from 'jquery'


class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addName: '',
            addDob: '',
            addGender: '',
            addZip: '',
            addEmail: '',
            addPassword: '',
        }
    }

    submitAndClear(e) {
        console.log(this.state.addName);
        console.log(this.state.addEmail);
        
        if (this.state.addname != '' && this.state.addZip != '' && this.state.addEmail != '' && this.state.addPassword != '') {
            this.setState(
                this.props.signUpClick.bind(this, this.state)
            )
            this.setState({
                addName: '',
                addDob: '',
                addGender: '',
                addZip: '',
                addEmail: '',
                addPassword: '',
            })
        }
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
                        {/* <label htmlFor="zip">Zip Code</label> */}
                        <input type="text" pattern="[0-9]{5}" className="form-control" id="zip" autoComplete="postal-code" placeholder="Zip Code" value={this.state.addZip} onChange={(e)=> {this.setState({addZip: e.target.value})}} required/>
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="email">Email</label> */}
                        <input type="email" className="form-control" id="newEmail" autoComplete="email" placeholder="email@address.com" value={this.state.addEmail} onChange={(e)=> {this.setState({addEmail: e.target.value})}} required/>
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="newPassword">Password</label> */}
                        <input type="password" className="form-control" id="newPassword" autoComplete="new-password" placeholder="Password" value={this.state.addPassword} onChange={(e)=> {this.setState({addPassword: e.target.value})}} required/>
                        <small id="newPasswordHelp" className="form-text text-muted">Must be at least 8 characters long.</small>
                    </div>

                    <small className="form-text text-muted">By Signing Up, you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy.</a></small>
                    <button type="submit" className="btn btn-warning btn-block" onClick={this.submitAndClear.bind(this)}>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp
