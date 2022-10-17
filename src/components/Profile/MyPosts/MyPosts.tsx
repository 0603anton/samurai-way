import React from 'react';
import Post from './Post/Post';
import {PostsPropsType} from '../Profile';


const MyPosts = (props: PostsPropsType) => {

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