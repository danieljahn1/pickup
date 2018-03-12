import React, { Component } from 'react'


class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = [{
            verifyEmail: '',
            verifyPassword: '',
        }]
    }
    
    submitAndClear() {
        this.setState(
            this.props.signInClick.bind(this, this.state)
        )
        this.setState({
            verifyEmail: '',
            verifyPassword: '',
        })
    }


    render() {
        return (
            <div className="col-md-12">
                <a href="#openModal" className="btn-link btn-lg pull-right">Sign In</a>
                <div id="openModal" className="modalDialog">
                    <div>
                        <a href="#close" title="Close" className="close">X</a>
                        <h2>Sign In</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" autoComplete="email" placeholder="email@address.com" value={this.state.verifyEmail} onChange={(e) => {this.setState({verifyEmail: e.target.value})}} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" autoComplete="current-password" placeholder="************" value={this.state.verifyPassword} onChange={(e) => {this.setState({verifyPassword: e.target.value})}} required/>
                            </div>
                            <button href="#close" type="submit" className="btn btn-warning btn-block" onClick={this.submitAndClear.bind(this)}>Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn
