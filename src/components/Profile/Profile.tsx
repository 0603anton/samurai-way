import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePagePropsType} from '../../State/state';
import MyPosts from './MyPosts/MyPosts';


export const Profile = (props: ProfilePagePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPostCallback}/>
        </div>
    );
};

