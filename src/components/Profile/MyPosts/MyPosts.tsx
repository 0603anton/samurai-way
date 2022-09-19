import React from 'react';
import _ from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <Post/>
            <Post/>
        </div>
    );
};

export default MyPosts;