import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../State/state';
import MyPosts from './MyPosts/MyPosts';


export const Profile = (props: ProfilePageType) => {
    debugger
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};

