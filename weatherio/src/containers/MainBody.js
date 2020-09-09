import React, { Component } from 'react'
import ScanFile from '../components/ScanFile';
import ScanUrl from './ScanUrl'

export default class MainBody extends Component {
    render() {
        return (
            <div className="MainBody">
                <ScanFile />
                <ScanUrl />
            </div>
        )
    }
}
