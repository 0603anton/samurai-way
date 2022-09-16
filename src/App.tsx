import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Technologies} from "./components/Technologies/Technologies";


function App() {
    return (
        <div className="App">
            <h1>Hello, samurai! Let's go!</h1>
            <Header/>
            <Technologies/>
        </div>
    );
}


export default App;
