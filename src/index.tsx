import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {RootStateType, store} from './State/state'; // тут из редакс стора
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './State/redux-store';


export type StateRootType = ReturnType<typeof store.getState>
let rerenderEntireTree = () => { // здесь добавили автотипизацию
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                    // state={store}
                    //  dispatch={store.dispatch.bind(store)}  // забиндили зафиксировали начальный объект, к чему будет обращаться this
                />
            </Provider>
        </BrowserRouter>, // т.к. далее не будет работать т.к. грубо говоря роходя по пропсам глубже this будет срабатывать на props
        document.getElementById('root') // из-за этого была ошибка this._callSubscriber is not a function - без binda ссылалось на другой объект
    );
}
rerenderEntireTree();

store.subscribe(() => rerenderEntireTree())