import React, { Component } from 'react';
import ScanFileAction from '../actions/ScanFile';
import {connect} from 'react-redux';

class ScanFile extends Component {

    handleClick = () => {
        this.props.ScanFileAction()
    }
    render() {
        return (
            <div className="ScanFile" onClick={this.handleClick}>
                Scan File
            </div>
        )
    }
}


export default connect(null, {ScanFileAction})(ScanFile)
