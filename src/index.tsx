import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from './State/state';
import {addPost} from "./State/state";

ReactDOM.render(
    <App state={state}/>,
    document.getElementById('root')
);