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

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.username)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default UsernameForm;
