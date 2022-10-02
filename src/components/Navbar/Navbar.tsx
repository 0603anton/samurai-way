import React from 'react';
import _ from "./Navbar.module.css"

export const Navbar = () => {
    return (
        <nav className={_.nav}>
            <ul>
                <li className={`${_.item} ${_.active}`}><a href={'/profile'}>Profile</a></li>
                <li className={_.item}><a href={'/dialogs'}>Messages</a></li>
                <li className={_.item}><a href={'/news'}>News</a></li>
                <li className={_.item}><a href={'/music'}>Music</a></li>
                <li className={_.item}><a href={'/settings'}>Settings</a></li>
            </ul>
        </nav>
    );
};

