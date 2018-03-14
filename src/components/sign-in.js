import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { userAuth } from '../redux/actions'


class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            verifyEmail: '',
            verifyPassword: '',
            redirect: false,
        }
    }

    userAuth() {
        if (this.state.verifyEmail != '' && this.state.verifyPassword != '') {
            var usersArrCopy = this.props.usersArr.slice();
            var objOfEmailFound = usersArrCopy.filter(item => item.email == this.state.verifyEmail)

            if (objOfEmailFound.length > 0) {
                if (objOfEmailFound[0].password == this.state.verifyPassword) {
                    this.props.sendToRedux(objOfEmailFound);
                    this.setState({ redirect: true });
                    console.log(this.props.loggedInUser);
                } else {
                    alert("Error: 5011 Incorrect Email or Password")
                }
            } else {
                alert("Error: 5012 Incorrect Email or Password")
            }
        } else {
            alert("Error: 5010 Please enter correct Email and Password.")
        }
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/welcome" />
        }
        return (
            <div className="col-md-12">
                <h3>Please Sign In to Join and Create Events.</h3>
                <span>Don't have an account?</span>
                <Link to="/signup"><button className="btn btn-link">Sign Up</button></Link>
                <form className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" autoComplete="email" placeholder="email@address.com" value={this.state.verifyEmail} onChange={(e) => { this.setState({ verifyEmail: e.target.value }) }} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" autoComplete="current-password" placeholder="************" value={this.state.verifyPassword} onChange={(e) => { this.setState({ verifyPassword: e.target.value }) }} required />
                    </div>
                    <button type="submit" className="btn btn-warning btn-block" onClick={this.userAuth.bind(this, this.state)}>Sign In</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser,
        usersArr: state.usersArr,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendToRedux: logInUser => dispatch(userAuth(logInUser)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
