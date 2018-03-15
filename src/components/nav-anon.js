import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { userAuth } from '../redux/actions'


class NavAnon extends Component {
    constructor(props) {
        super(props)

        this.state = {
            verifyEmail: '',
            verifyPassword: '',
        }
    }

    userAuth() {
        if (this.state.verifyEmail != '' && this.state.verifyPassword != '') {
            var usersArrCopy = this.props.usersArr.slice();
            var objOfEmailFound = usersArrCopy.filter(item => item.email == this.state.verifyEmail)

            if (objOfEmailFound.length > 0) {
                if (objOfEmailFound[0].password == this.state.verifyPassword) {
                    this.props.sendToRedux(objOfEmailFound);
                    this.props.history.push("/welcome");
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
        return (
            <nav className="col-md-6 pull-right nav-links">
                <a href="#openModal" className="btn btn-warning pull-right">SIGN IN</a>
                <Link to="/signup"><button className="btn btn-warning pull-right">SIGN UP</button></Link>
                <Link to="/createevent"><button className="btn btn-warning pull-right">CREATE EVENTS</button></Link>
                <Link to="/viewevents"><button className="btn btn-warning pull-right">VIEW EVENTS</button></Link>
                <div id="openModal" className="modalDialog">
                    <div>
                        <a href="#close" title="Close" className="close">X</a>
                        <h3>Sign in with your account</h3>
                        <h1></h1>
                        <form>
                            <div className="form-group">
                                {/* <label htmlFor="email-modal">Email</label> */}
                                <input type="email" className="form-control" id="email-modal" autoComplete="email" placeholder="Email" value={this.state.verifyEmail} onChange={(e) => { this.setState({ verifyEmail: e.target.value }) }} required />
                            </div>
                            <h1></h1>
                            <div className="form-group">
                                {/* <label htmlFor="password-modal">Password</label> */}
                                <input type="password" className="form-control" id="password-modal" autoComplete="current-password" placeholder="Password" value={this.state.verifyPassword} onChange={(e) => { this.setState({ verifyPassword: e.target.value }) }} required />
                            </div>
                            <h1></h1>
                            <button href="#close" type="submit" className="btn btn-success btn-block" onClick={this.userAuth.bind(this, this.state)}>Sign In</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        usersArr: state.usersArr,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendToRedux: logInUser => dispatch(userAuth(logInUser)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavAnon))
