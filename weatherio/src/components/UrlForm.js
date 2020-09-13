import React, { Component } from 'react'

export default class UrlForm extends Component {
    render() {
        return (
            <div className='UrlForm'>
                <form>
                    <label>Input URL</label>
                    <input type='text'></input>
                    <input type='submit'></input>
                </form>
                
            </div>
        )
    }
}
