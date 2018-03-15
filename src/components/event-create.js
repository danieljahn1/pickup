import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { eventCreate } from '../redux/actions'
import uniqid from 'uniqid'


class EventCreate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            events: [],
            event: '',
            date: '',
            address: '',
            zip: '',
            category: '',
            minPlayersNeeded: '',
            maxPlayersNeeded: '',
            message: '',
        }
    }

    eventCreate(e) {
        if (this.state.event != '' && this.state.date != '' && this.state.address != '' && this.state.zip != '' && this.state.minPlayersNeeded != '' && this.state.maxPlayersNeeded != '' && this.state.message != '') {
            var eventsCopy = this.state.events.slice();
            eventsCopy.unshift({
                id: uniqid(),
                event: this.state.event,
                date: this.state.date,
                address: this.state.address,
                zip: this.state.zip,
                category: this.state.category,
                minPlayersNeeded: this.state.minPlayersNeeded,
                maxPlayersNeeded: this.state.maxPlayersNeeded,
                message: this.state.message,
            })
            this.props.sendToRedux(eventsCopy);
            this.setState({ redirect: true });
            alert("Your event has been created.")
        }
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/viewevents" />
        }
        return (
            <div className="col-md-6 forms">
                <h2>Create an Event!</h2>
                <h1></h1>
                <form className="col-md-12">
                    <div className="form-group">
                        {/* <label htmlFor="event-name">Event Name</label> */}
                        <input type="text" className="form-control" id="event-name" placeholder="Name of Event" value={this.state.event} onChange={(e) => { this.setState({ event: e.target.value }) }} required />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="event-date">Date of Birth</label> */}
                        <input type="date" className="form-control" id="event-date" value={this.state.date} onChange={(e) => { this.setState({ date: e.target.value }) }} required />
                        <small className="form-text text-muted" id="event-date-help">Date of Event</small>
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="event-address">Address</label> */}
                        <input type="text" className="form-control" id="event-address" autoComplete="street-address" placeholder="Street Address" value={this.state.address} onChange={(e) => { this.setState({ address: e.target.value }) }} required />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="event-zip">Zip Code</label> */}
                        <input type="text" pattern="[0-9]{5}" className="form-control" id="event-zip" autoComplete="postal-code" placeholder="Zip Code" value={this.state.zip} onChange={(e) => { this.setState({ zip: e.target.value }) }} required />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="event-category">Category</label> */}
                        <select className="form-control" id="event-category" value={this.state.category} onChange={(e) => { this.setState({ category: e.target.value }) }} >
                            <option defaultValue>Type of Event...</option>
                            <option>Basketball</option>
                            <option>Beer Pong</option>
                            <option>Cycling</option>
                            <option>Flag Football</option>
                            <option>Golf</option>
                            <option>Hiking</option>
                            <option>Hockey</option>
                            <option>Kickball</option>
                            <option>Tennis</option>
                            <option>Ping Pong</option>
                            <option>Running</option>
                            <option>Soccer</option>
                            <option>Softball</option>
                            <option>Tennis</option>
                            <option>Walking</option>
                        </select>
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="minPlayersNeeded"></label> */}
                        <input type="number" className="form-control" id="minPlayersNeeded" placeholder="Minimum Players Needed" value={this.state.minPlayersNeeded} onChange={(e) => { this.setState({ minPlayersNeeded: e.target.value }) }} required />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="maxPlayersNeeded"></label> */}
                        <input type="number" className="form-control" id="maxPlayersNeeded" placeholder="Maximum Players Needed" value={this.state.maxPlayersNeeded} onChange={(e) => { this.setState({ maxPlayersNeeded: e.target.value }) }} required />
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="message"></label> */}
                        <textarea type="text" className="form-control" id="message" placeholder="Add a message about your event..." value={this.state.message} onChange={(e) => { this.setState({ message: e.target.value }) }} required />
                    </div>
                    <button type="submit" className="btn btn-success btn-block" onClick={this.eventCreate.bind(this, this.state)}>Create Event</button>
                </form>
            </div >
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
