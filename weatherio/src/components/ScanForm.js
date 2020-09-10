import React, { Component } from 'react'

export default class ScanForm extends Component {

    handleSubmit = () => {
        console.log(this)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                </form>
            </div>
        )
    }
}

