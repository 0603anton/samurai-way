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
import {StatePropsType, StateType} from './State/state';


function App(props: StatePropsType) {

    return (
        // <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() => <Dialogs dialogsData={props.state.dialogsPage.dialogsData}
                                                  messageData={props.state.dialogsPage.messageData}/>}/>

                    <Route path="/profile" render={() => <Profile posts={props.state.profilePage.posts}
                                                                  dispatch={props.dispatch}
                                                                  // addPostCallback={props.addPost}
                                                                  // updateNewPostText={props.updateNewPostText}
                                                                  newPostText={props.state.profilePage.newPostText}
                    />}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        // </BrowserRouter>
    );
}


export default App;
