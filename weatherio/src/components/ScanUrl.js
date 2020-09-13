import React, { Component } from 'react'

export default class ScanUrl extends Component {

    handleClick = () => {
        console.log('Scan URL button')
    }
    
    render() {
        return (
            <div className="ScanUrl" onClick={this.handleClick}>
                Scan URL
            </div>
        )
    }
}
