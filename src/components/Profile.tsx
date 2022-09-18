import React from 'react';
import _ from "./Profile.module.css"

export const Profile = () => {
    return (
        <div className={_.content}>
            <div>
                <img className={_.content} src="https://wallpaperaccess.com/full/1131217.jpg" alt=""/>
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
    );
};

