import React, { Component } from 'react';

import { connect } from 'react-redux'


class TestRedux extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                { 
                    this.props.test.map( (item, index) =>
                        <div key={index}>
                            <p>{item.name}</p>
                            <p>{item.copy}</p>
                        </div>
                    )
                }
            </div>
        )
    }

}

const MapStateToProps = state => {
    return {
        test: state.testRedux
    }
}

export default connect(MapStateToProps)(TestRedux)