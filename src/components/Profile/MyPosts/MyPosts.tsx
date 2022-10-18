import React from 'react';
import Post from './Post/Post';
import {ProfilePageType} from '../../../State/state';


const MyPosts = (props: ProfilePageType) => {

    const postsElements = props.posts.map((el) => {
        return <Post id={el.id} message={el.message} likesCount={el.likesCount}/>
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