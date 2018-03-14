import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { userAuth } from '../redux/actions'


class NavAnon extends Component {
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
            <nav className="col-md-6 pull-right">
                {/* <Link to="/"><button className="btn btn-link">HOME</button></Link> */}
                <a href="#openModal" className="btn btn-link pull-right">SIGN IN</a>
                <Link to="/signup"><button className="btn btn-link pull-right">SIGN UP</button></Link>
                <Link to="/createevent"><button className="btn btn-link pull-right">CREATE EVENTS</button></Link>
                <Link to="/viewevents"><button className="btn btn-link pull-right">VIEW EVENTS</button></Link>
                <div id="openModal" className="modalDialog">
                    <div>
                        <a href="#close" title="Close" className="close">X</a>
                        <h2>Sign In</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" autoComplete="email" placeholder="email@address.com" value={this.state.verifyEmail} onChange={(e) => { this.setState({ verifyEmail: e.target.value }) }} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" autoComplete="current-password" placeholder="************" value={this.state.verifyPassword} onChange={(e) => { this.setState({ verifyPassword: e.target.value }) }} required />
                            </div>
                            <button href="#close" type="submit" className="btn btn-warning btn-block" onClick={this.userAuth.bind(this, this.state)}>Sign In</button>
                        </form>
                    </div>
                </div>
            </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavAnon)
