import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {

    const posts = [
        {di: 1, message: 'How, are you?', likesCount: 15},
        {di: 2, message: 'It`s my first post', likesCount: 5},
        {di: 3, message: 'Yo', likesCount: 5},
        {di: 4, message: 'Yo', likesCount: 5},
        {di: 5, message: 'Yo', likesCount: 5},
        {di: 6, message: 'Yo', likesCount: 5},
    ]

    const postsElements = posts.map((el)=>{
       return <Post message={el.message} likes={el.likesCount} />
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