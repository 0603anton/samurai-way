import React from 'react';
import _ from "./Navbar.module.css"

export const Navbar = () => {
    return (
        <nav className={_.nav}>
            <ul>
                <li className="item">Profile</li>
                <li className="item">Message</li>
                <li className="item">News</li>
                <li className="item">Music</li>
                <li className="item">Settings</li>
            </ul>
        </nav>
    );
};

