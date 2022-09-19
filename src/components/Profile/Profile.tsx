import React from 'react';
import _ from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={_.content}>
            <div>
                <img className={_.contentImg} src="https://wallpaperaccess.com/full/1131217.jpg" alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    );
};

