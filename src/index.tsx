import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {CompanionType, MessageType} from './App';
import {state} from "./State/state";
import {PostPropsType} from "./components/Profile/Profile";


export type AppPropsType={
    dialogsData: CompanionType[]
    messageData:MessageType[]
    posts: PostPropsType[]
}

export type StatePropsType = {
    state:AppPropsType
}


ReactDOM.render(
    <App  state={state}/>,
  document.getElementById('root')
);