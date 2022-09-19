import React from 'react';
import _ from './Post.module.css'

const Post = () => {
    return (
        <div>
            <img className={_.img} src="https://img.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg" alt="avatar"/>
            post1
        </div>
    );
};

export default Post;