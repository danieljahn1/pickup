import React, { Component } from 'react'

import { connect } from 'react-redux'

class Home extends Component {
    constructor(props) {
        super(props);
        // this.state = { }
        // console.log(this.props.match.params.eventId);
    }

    render() { 
        return ( 
            <div className="col-md-12">
                {
                    // console.log(this.props.events.filter((item) => item.id == this.props.match.params.eventId))
                    this.props.events.filter((item) => item.id == this.props.match.params.eventId).map( (item, index) =>
                        <div key={ index } className="col-md-8 eventCard">
                            <div className="row innerEventCard">
                                <h4>{ item.event }</h4>
                                <p>Category: { item.category }</p>
                                <p>Date: { item.date }</p>                             
                            </div>
                            <div className="row innerEventCard">                                
                                <p className="detailsSubheader">Location:</p>
                                <p>{ item.address }</p>
                                <p>{ item.zip }</p>
                            </div>
                            <div className="row innerEventCard">
                                <p className="detailsSubheader">Details:</p>
                                <p>Minimum number of players needed: { item.minPlayersNeeded }</p>
                                <p>Maximum number of players needed: { item.maxPlayersNeeded }</p>
                            </div>
                            <div className="row innerEventCard">                             
                                <p className="message">{ item.message }
                                </p>
                                {/* <Link to={'/eventdetails/' + item.id}><button id="btnJoin" className="btn btn-success">More Info</button></Link> */}
                                <button id="btnJoin" className="btn btn-success btnPadding">Join the Event</button>
                                
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

const MapStateToProps = state => {
    return {
        events: state.events
    }
}


export default connect(MapStateToProps)(Home)
