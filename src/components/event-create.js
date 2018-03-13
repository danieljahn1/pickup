import React, { Component } from 'react'
import uniqid from 'uniqid'
import { create } from 'react-redux'
import { connect } from 'react-redux'
import { eventCreate } from '../redux/actions'


class EventCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            event: "",
            date: "",
            address: "",
            zip: "",
            category: "",
            minPlayersNeeded: "",
            maxPlayersNeeded: "",
            message: ""
        }
    }

    eventCreate(e) {
        var eventsCopy = this.state.events.slice();
        eventsCopy.unshift({
            event: this.state.event,
            date: this.state.date,
            address: this.state.address,
            
            zip: this.state.zip,
            category: this.state.category,
            minPlayersNeeded: this.state.minPlayersNeeded,
            maxPlayersNeeded: this.state.maxPlayersNeeded,
            message: this.state.message
        })
        this.props.sendToRedux(eventsCopy);
        console.log(this.props.events)
        console.log(eventsCopy)
    }
    render() {
        return (
            <div className="col-md-12">
                <h2>Create an Event!</h2>
                <form className="col-md-6">
                    <div className="form-group">
                        {/* <label htmlFor="name">Event</label> */}
                        <input type="text" className="form-control" id="event" autoComplete="event" placeholder="Type of Event" value={this.state.event} onChange={(e) => { this.setState({ event: e.target.value }) }} />
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="dob">Date of Birth</label> */}
                        <input type="date" className="form-control" id="date" autoComplete="" value={this.state.date} onChange={(e) => { this.setState({ date: e.target.value }) }} />
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="gender">Address</label> */}
                        <input type="text" className="form-control" id="address" autoComplete="address" placeholder="Address" value={this.state.address} onChange={(e) => { this.setState({ address: e.target.value }) }} />
                    </div>

                    {/* <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input type="text" className="form-control" id="city" autoComplete="city" placeholder="City" value={this.state.city} onChange={(e) => { this.setState({ city: e.target.value }) }} />
                    </div> */}

                    <div className="form-group">
                        {/* <label htmlFor="state">Zip</label> */}
                        <input type="text" className="form-control" id="zip" autoComplete="zip" placeholder="Zip" value={this.state.zip} onChange={(e) => { this.setState({ zip: e.target.value }) }} />
                    </div>

                    <div className="form-group">
                        {/* <label htmlFor="email">Email</label> */}
                        <select type="category" className="form-control" id="category" autoComplete="category" value={this.state.category} onChange={(e) => { this.setState({ category: e.target.value }) }}>
                            <option defaultValue>Category...</option>
                            <option>Flag Football</option>
                            <option>Softball</option>
                            <option>Basketball</option>
                            <option>Hiking</option>
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
                        <input type="number" className="form-control" id="minPlayersNeeded" autoComplete="minPlayersNeeded" placeholder="Minimum Players Needed" value={this.state.minPlayersNeeded} onChange={(e) => { this.setState({ minPlayersNeeded: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="maxPlayersNeeded"></label> */}
                        <input type="number" className="form-control" id="maxPlayersNeeded" autoComplete="maxPlayersNeeded" placeholder="Maximum Players Needed" value={this.state.maxPlayersNeeded} onChange={(e) => { this.setState({ maxPlayersNeeded: e.target.value }) }} />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="message"></label> */}
                        <input type="text" className="form-control" id="message" autoComplete="message" placeholder="Message" value={this.state.message} onChange={(e) => { this.setState({ message: e.target.value }) }} />
                    </div>
                    {/* <Link to={'/viewevents/'}> */}
                    <button type="button" className="btn btn-success pull-right" onClick={this.eventCreate.bind(this, this.state)} >Submit</button>
                    {/* </Link> */}
                    
                </form>
            </div>


        )
    }
}
const mapStateToProps = state => {
    return {
        events: state.events
    }
}
const mapDispatchToProps = dispatch => {
    return {
        sendToRedux: newEvent => dispatch(eventCreate(newEvent))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventCreate)
