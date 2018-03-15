import React, { Component } from 'react'
import uniqid from 'uniqid'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { userCreate } from '../redux/actions'
import { userAuth } from '../redux/actions'


class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usersArr: [],
            addName: '',
            addDob: '',
            addGender: '',
            addZip: '',
            addEmail: '',
            addPassword: '',
            redirect: false
        }
    }

    userCreate() {
        if (this.state.addname != '' && this.state.addZip != '' && this.state.addEmail != '' && this.state.addPassword.length > 7) {
            var usersArrCopy = this.state.usersArr.slice();
            usersArrCopy.unshift({
                id: uniqid(),
                name: this.state.addName,
                dob: this.state.addDob,
                gender: this.state.addGender,
                zip: this.state.addZip,
                email: this.state.addEmail,
                password: this.state.addPassword,
            })
            this.props.createNewUserRedux(usersArrCopy);
            this.props.logInNewUserRedux(usersArrCopy);
            this.setState({ redirect: true });
            console.log(this.props.usersArr);
            // console.log(this.props.loggedInUser);
        }
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/welcome" />
        }
        return (
            <div className="col-md-12">
                <h2>Join in on the action now!</h2>
                <div className="col-md-6">
                    <div className="pull-right">
                        <span>Already have an account?</span>
                        <Link to="/signin"><button className="btn btn-link">Sign In</button></Link>
                    </div>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="add-name" autoComplete="name" placeholder="Full Name" value={this.state.addName} onChange={(e) => { this.setState({ addName: e.target.value }) }} required />
                        </div>
                        <div className="form-group">
                            <input type="date" className="form-control" id="add-dob" autoComplete="birthdate" placeholder="Date of Birth" value={this.state.addDob} onChange={(e) => { this.setState({ addDob: e.target.value }) }} />
                            <small className="form-text text-muted" id="add-dob-help">Birth Date</small>
                        </div>
                        <div className="form-group">
                            <select type="gender" className="form-control" id="add-gender" autoComplete="gender" value={this.state.addGender} onChange={(e) => { this.setState({ addGender: e.target.value }) }}>
                                <option defaultValue>Gender...</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Prefer not to answer</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" pattern="[0-9]{5}" className="form-control" id="add-zip" autoComplete="postal-code" placeholder="Zip Code" value={this.state.addZip} onChange={(e) => { this.setState({ addZip: e.target.value }) }} required />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="add-mail" autoComplete="email" placeholder="Email" value={this.state.addEmail} onChange={(e) => { this.setState({ addEmail: e.target.value }) }} required />
                        </div>
                        <div className="form-group">
                            <input type="password" pattern=".{8,}" className="form-control" id="add-password" autoComplete="new-password" placeholder="Password" value={this.state.addPassword} onChange={(e) => { this.setState({ addPassword: e.target.value }) }} required />
                            <small className="form-text text-muted" id="add-password-help">Must be at least 8 characters long.</small>
                        </div>
                        <small className="form-text text-muted" id="tou-pp-help">By Signing Up, you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy.</a></small>
                        <button type="submit" className="btn btn-warning btn-block" onClick={this.userCreate.bind(this, this.state)}>Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        usersArr: state.usersArr,
        loggedInUser: state.loggedInUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createNewUserRedux: newUser => dispatch(userCreate(newUser)),
        logInNewUserRedux: newUser => dispatch(userAuth(newUser)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
