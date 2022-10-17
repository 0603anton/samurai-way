import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

export type PostsPropsType = {
    posts: PostPropsType[]
}

type PostPropsType = {
    id: number
    message: string
    likesCount: number
}

export const Profile = (props: PostsPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};

