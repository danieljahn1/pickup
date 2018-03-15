import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Welcome extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-10 welcome welcome-user">
                    <h2>Welcome, {this.props.loggedInUser[0].name} . . .</h2>
                </div>
                <div className="col-md-10 pull-right welcome welcome-find-event">
                    <p className="lead home-message" >Reiciendis, ducimus aut. Itaque ipsum nobis animi adipisci ipsa quas at. Cum modi commodi autem numquam totam architecto fuga quo, consequatur natus. Ipsam dicta adipisci et. Facilis asperiores at laudantium, veritatis molestiae aut!</p>
                    <Link to="/viewevents"><button className="btn btn-success btn-lg pull-right">Find Events To Join</button></Link>
                </div>
                <div className="col-md-10 pull-left welcome welcome-create-event">
                    <p className="lead home-message" >Saepe quae rem molestias, officiis id unde totam incidunt nihil quasi minima ea accusamus ducimus quisquam exercitationem repudiandae eaque quia harum fugiat. Amet consectetur adipisicing elit.</p>     <Link to="/createevent"><button className="btn btn-warning btn-lg pull-right">Start A New Event</button></Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser,
    }
}

export default connect(mapStateToProps)(Welcome)
