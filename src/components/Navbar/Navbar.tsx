import React from 'react';
import _ from "./Navbar.module.css"
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className={_.nav}>
            <ul>
                <li className={_.item}><NavLink to='/profile' activeClassName={_.selected}>Profile</NavLink></li>
                <li className={_.item}><NavLink to={'/dialogs'} activeClassName={_.selected}>Messages</NavLink></li>
                <li className={_.item}><NavLink to={'/news'} activeClassName={_.selected}>News</NavLink></li>
                <li className={_.item}><NavLink to={'/music'} activeClassName={_.selected}>Music</NavLink></li>
                <li className={_.item}><NavLink to={'/settings'} activeClassName={_.selected}>Settings</NavLink></li>
            </ul>
        </nav>
    );
};

