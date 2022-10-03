import React from 'react';
import _ from "./Navbar.module.css"
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className={_.nav}>
            <ul>
                <li className={`${_.item} ${_.active}`}><NavLink to='/profile'>Profile</NavLink></li>
                <li className={_.item}><NavLink to={'/dialogs'}>Messages</NavLink></li>
                <li className={_.item}><NavLink to={'/news'}>News</NavLink></li>
                <li className={_.item}><NavLink to={'/music'}>Music</NavLink></li>
                <li className={_.item}><NavLink to={'/settings'}>Settings</NavLink></li>
            </ul>
        </nav>
    );
};

