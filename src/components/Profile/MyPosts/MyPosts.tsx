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
            <Post message='How, are you?' likes={15} />
            <Post message='It`s my first post' likes={20} />
        </div>
    );
};

export default MyPosts;