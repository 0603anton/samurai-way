import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType, store} from './State/state';



let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App state={state} addPost={store.addPost.bind(store)}  // забиндили зафиксировали начальный объект, к чему будет обращаться this
             updateNewPostText={store.updateNewPostText.bind(store)}/>, // т.к. далее не будет работать т.к. грубо говоря роходя по пропсам глубже this будет срабатывать на props
        document.getElementById('root') // из-за этого была ошибка this._callSubscriber is not a function - без binda ссылалось на другой объект
    );
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)