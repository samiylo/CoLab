import React, { Component } from 'react'
import ScanFile from '../components/ScanFile';
import ScanUrl from './ScanUrl';
import {Route, Switch} from 'react-router-dom';

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
