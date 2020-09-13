import React, { Component } from 'react'

export default class FileForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
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

