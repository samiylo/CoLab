import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScanUrl from '../actions/ScanUrl'

class UrlForm extends Component {

    state = {
        URL: ''
    }

    handleChange = (event) => {
        this.setState({
            URL: event.target.value
        })

        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.ScanUrl(this.state.URL)
        console.log(this.props)
    }

    render() {
        return (
            <div className='UrlForm'>
                <form onSubmit={this.handleSubmit}>
                    <label>Input URL</label>
                    <input type='text' onChange={this.handleChange}></input>
                    <input type='submit'></input>
                </form>
                
            </div>
        )
    }
}

export default connect(null, {ScanUrl}) (UrlForm)
