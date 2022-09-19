import React from 'react';
import _ from "./Navbar.module.css"

export const Navbar = () => {
    return (
        <nav className={_.nav}>
            <ul>
                <li className={`${_.item} ${_.active}`}>Profile</li>
                <li className={_.item}>Message</li>
                <li className={_.item}>News</li>
                <li className={_.item}>Music</li>
                <li className={_.item}>Settings</li>
            </ul>
        </nav>
    );
};

