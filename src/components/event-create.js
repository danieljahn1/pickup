import React, { Component } from 'react'
import uniqid from 'uniqid'


class EventCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uniqid(),
            event: "",
            date: "",
            address: "",
            zip: "",
            category: "",
            minPlayersNeeded: 2,
            maxPlayersNeeded: 20,
            message: ""
        }
    }

    eventCreate() {
        this.setState(
            this.props.eventCreateClick.bind(this, this.state)
        )
        this.setState({
            id: uniqid(),
            event: "",
            date: "",
            address: "",
            zip: "",
            category: "",
            minPlayersNeeded: 2,
            maxPlayersNeeded: 20,
            message: ""
        })
    }
    render() {
        return (
            <div className="col-md-12">
                <h2>Create an Event!</h2>
                <form className="col-md-6">
                    <div className="form-group">
                        {/* <label htmlFor="name">Event</label> */}
                        <input type="text" className="form-control" id="event" autoComplete="event" placeholder="Type of Event" value={this.state.addEvent} onChange={(e) => { this.setState({ addEvent: e.target.value }) }} required />
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="dob">Date of Birth</label> */}
                        <input type="date" className="form-control" id="date" autoComplete="" value={this.state.addDate} onChange={(e) => { this.setState({ addDate: e.target.value }) }} />
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="gender">Address</label> */}
                        <input type="text" className="form-control" id="address" autoComplete="address" placeholder="Address" value={this.state.addAddress} onChange={(e) => { this.setState({ addAddress: e.target.value }) }} />
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="city">City</label> */}
                        <input type="text" className="form-control" id="city" autoComplete="city" placeholder="City" value={this.state.addCity} onChange={(e) => { this.setState({ addCity: e.target.value }) }} />
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="state">Zip</label> */}
                        <input type="text" className="form-control" id="zip" autoComplete="zip" placeholder="Zip" value={this.state.addZip} onChange={(e) => { this.setState({ addZip: e.target.value }) }} />
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="email">Email</label> */}
                        <select type="category" className="form-control" id="category" autoComplete="category" value={this.state.addCategory} onChange={(e) => { this.setState({ addCategory: e.target.value }) }}>
                            <option defaultValue>Category...</option>
                            <option>Football</option>
                            <option>Baseball</option>
                            <option>Soccer</option>
                            <option>Kickball</option>
                            <option>Golf</option>
                            <option>Ping Pong</option>
                            <option>Hockey</option>
                            <option>Tennis</option>
                            <option>Beer Pong</option>
                        </select>
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="minPlayersNeeded"></label> */}
                        <input type="number" className="form-control" id="minPlayersNeeded" autoComplete="minPlayersNeeded" placeholder="Minimum Players Needed" value={this.state.addMinPlayersNeeded} onChange={(e) => { this.setState({ addMinPlayersNeeded: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="maxPlayersNeeded"></label> */}
                        <input type="number" className="form-control" id="maxPlayersNeeded" autoComplete="maxPlayersNeeded" placeholder="Maximum Players Needed" value={this.state.addMaxPlayersNeeded} onChange={(e) => { this.setState({ addMaxPlayersNeeded: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="message"></label> */}
                        <input type="text" className="form-control" id="message" autoComplete="message" placeholder="Message" value={this.state.addMessage} onChange={(e) => { this.setState({ addMessage: e.target.value }) }} />
                    </div>
                    <button className="btn btn-success pull-right" onClick={this.eventCreate.bind(this)} >Submit</button>
                </form>
            </div>


        )
    }
}

export default EventCreate
