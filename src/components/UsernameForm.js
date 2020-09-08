import React, { Component } from 'react'

class UsernameForm extends Component {

    state = {
        username: ''
    }

    handleChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default UsernameForm
