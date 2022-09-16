import React from 'react';
import './App.css';


function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGvUYDg2lhrLe-eeprr-c51m0Kv7wR4tw06w&usqp=CAU"
                    alt=""/>
            </header>
            <nav className="nav">
                <ul>
                    <li>Profile</li>
                    <li>Message</li>
                    <li>News</li>
                    <li>Music</li>
                    <li>Settings</li>
                </ul>
            </nav>
            <div className="content">
                <div>
                    <img className="content-img" src="https://wallpaperaccess.com/full/1131217.jpg" alt=""/>
                </div>
                <div>
                    ava+description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        post1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
