import React, { Component } from 'react';
import ScanFile from '../components/ScanFile';
import ScanUrl from '../components/ScanUrl';
import FileForm from '../components/FileForm';
import {Route, Switch} from 'react-router-dom';

export default class MainBody extends Component {
    render() {
        return (
            <div className="MainBody">
                    <ScanFile />
                    <ScanUrl />
                    <FileForm />
            </div>
        )
    }
}
