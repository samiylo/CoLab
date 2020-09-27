import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScanUrlAction from '../actions/ScanUrl';

class ScanUrl extends Component {

    state = {
        
    }

    handleClick = () => {
        this.props.ScanUrlAction()
    }
    
    render() {
        return (
            <div className="ScanUrl" onClick={this.handleClick}>
                Scan URL
            </div>
        )
    }
}

export default connect(null, { ScanUrlAction } )(ScanUrl)
