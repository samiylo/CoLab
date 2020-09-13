import React, { Component } from 'react'

export default class ScanForm extends Component {

    handleSubmit = () => {
        console.log("Form Submited")
    }
    render() {
        return (
            <div className='ScanForm'>
                <form onSubmit={this.handleSubmit}>
                    <label>Input File</label>
                    <input type="text"></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

