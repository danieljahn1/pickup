import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { userLogIn } from '../redux/actions'


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

    joinEventUrl() {
        var url = "/eventdetails/" + this.props.eventLastViewed;
        return url
    }

    render() {
        const { redirect } = this.state;
        if (redirect && this.props.eventLastViewed.length != 0) {
            return <Redirect to={this.joinEventUrl()} />
            } else if (redirect) {
                return <Redirect to="/welcome" />
            }
            
        return (
            <div className="col-md-6 forms">
                <h2>Sign in to join and create events ...</h2>
                <div className="col-md-12">
                    <div className="pull-right">
                        <span>Don't have an account?</span>
                        <Link to="/signup"><button className="btn btn-link">Sign Up</button></Link>
                    </div>
                    <form>
                        <div className="form-group">
                            {/* <label htmlFor="email">Email</label> */}
                            <input type="email" className="form-control" id="email" autoComplete="email" placeholder="Email" value={this.state.verifyEmail} onChange={(e) => { this.setState({ verifyEmail: e.target.value }) }} required />
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="password">Password</label> */}
                            <input type="password" className="form-control" id="password" autoComplete="current-password" placeholder="Password" value={this.state.verifyPassword} onChange={(e) => { this.setState({ verifyPassword: e.target.value }) }} required />
                        </div>
                        <button type="submit" className="btn btn-success btn-block" onClick={this.userAuth.bind(this, this.state)}>Sign In</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        usersArr: state.usersArr,
        eventLastViewed: state.eventLastViewed,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendToRedux: logInUser => dispatch(userLogIn(logInUser)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
