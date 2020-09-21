import React, { Component } from 'react'

export default class ScanFile extends Component {

    handleClick = () => {
        console.log('Scan File Clicked')
    }
    render() {
        return (
            <div className="ScanFile" onClick={this.handleClick}>
                Scan File
            </div>
        )
    }
}

