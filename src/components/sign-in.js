import React, { Component } from 'react';


class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }
    
    submitAndClear() {
        this.setState(
            this.props.signInClick.bind(this, this.state)
        )
        this.setState({
            email: '',
            password: '',
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
                                <input type="email" className="form-control" id="email" placeholder="username@email.com" value={this.state.email} onChange={(e) => {this.setState({email: e.target.value})}} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" autoComplete="" placeholder="************" value={this.state.email} onChange={(e) => {this.setState({email: e.target.value})}} required/>
                            </div>
                            <button href="#close" type="submit" className="btn btn-warning btn-block" onKeyUp={this.submitAndClear.bind(this)}>Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn
