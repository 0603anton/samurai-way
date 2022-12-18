import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {StatePropsType} from './State/state';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


function App(props: StatePropsType) {

    return (
        // <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs"
                       render={() => <DialogsContainer
                           // dialogsData={props.state.dialogsPage.dialogsData}
                           //                    messageData={props.state.dialogsPage.messageData}
                           //                    newMessageText={props.state.dialogsPage.newMessageText}
                                              dispatch={props.dispatch}
                                              store={props.state}
                       />}/>

                <Route path="/profile" render={() => <Profile
                    // posts={props.state.profilePage.posts}
                                                              dispatch={props.dispatch}
                                                              store={props.state}
                    // addPost={props}
                    // updateNewPostText={props.updateNewPostText}
                    //                                           newPostText={props.state.profilePage.newPostText}
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
