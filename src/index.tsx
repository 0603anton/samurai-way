import React from 'react';
import './index.css';
import {state} from './State/state';
import {rerenderEntireTree} from './render';


// let rerenderEntireTree = () => {
//     ReactDOM.render(
//         <App state={state}/>,
//         document.getElementById('root')
//     );
// }

rerenderEntireTree(state);