import React from 'react';
import Post from './Post/Post';
import {PostPropsType} from "../Profile";
import post from "./Post/Post";

type MyPostPropsType = {
    posts:PostPropsType[]
}

const MyPosts = (props:MyPostPropsType) => {

    const postsElements = props.posts.map((el) => {
        return <Post message={el.message} likes={el.likesCount}/>
    })

    return (
        <div>
            My posts
            <div>
                New post
            </div>
            {postsElements}
        </div>
    );
};

export default MyPosts;