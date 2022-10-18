import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {StatePropsType} from "../../index";


export type PostPropsType = {
    id: number
    message: string
    likesCount: number
}

export const Profile = (props:StatePropsType) => {
    debugger
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props}/>
        </div>
    );
};

