import React, { Component } from 'react'

export default class ScanFile extends Component {

    handleClick = () => {
        fetch('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02', {
            method: 'GET',
            mode: 'cors',

            
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }
    render() {
        return (
            <div className="ScanFile" onClick={this.handleClick}>
                Scan File
            </div>
        )
    }
}

