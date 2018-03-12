import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Link, Switch, Route } from 'react-router-dom'

class EventList extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            eventIndex: 0
        }
    }

    render() { 
        return (
            <div className="col-md-12 container">
                <div className="col-md-12 container pull-right">
                    <label htmlFor="selectFilter">Narrow my results:</label>
                    <select name="filterResults" id="selectFilter">
                        <option value="test">test</option>
                    </select>
                    <button id="btnFilter" className="btn btn-primary btn-xs btnPadding">Go</button>
                </div>
                {
                    this.props.events.map( (item, index) =>
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
                            {/* <div className="row innerEventCard">
                                <p>Minimum number of players needed: { item.minPlayersNeeded }</p>
                                <p>Maximum number of players needed: { item.maxPlayersNeeded }</p>
                            </div> */}
                            <div className="row innerEventCard">
                                <Link to={'/eventdetails/' + item.id}><button id="btnMoreInfo" className="btn btn-success">More Info</button></Link>
                                {/* <button id="btnJoin" className="btn btn-info btnPadding">Join the Game</button> */}
                                
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


export default connect(MapStateToProps)(EventList)
