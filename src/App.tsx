import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';

export type CompanionType = {
    name: string
    id: number
}

export type MessageType = {
    id: number
    message: string
}

function App() {


    const dialogsData = [
        {id: 1, name: 'companion1'},
        {id: 2, name: 'companion2'},
        {id: 3, name: 'companion3'},
        {id: 4, name: 'companion4'},
        {id: 5, name: 'companion5'},
        {id: 6, name: 'companion6'},
    ]

    const messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo!'},
        {id: 4, message: 'Yo!'},
        {id: 5, message: 'Yo!'},
        {id: 6, message: 'Yo!'},
    ]


    const posts = [
        {id: 1, message: 'How, are you?', likesCount: 15},
        {id: 2, message: 'It`s my first post', likesCount: 5},
        {id: 3, message: 'Yo', likesCount: 5},
        {id: 4, message: 'Yo', likesCount: 5},
        {id: 5, message: 'Yo', likesCount: 5},
        {id: 6, message: 'Yo', likesCount: 5},
    ]


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() => <Dialogs dialogsData={dialogsData} messageData={messageData}/>}/>

                    <Route path="/profile" render={() => <Profile posts={posts}/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
