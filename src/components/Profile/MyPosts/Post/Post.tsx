import React from 'react';
import _ from './Post.module.css'
import {PostType} from '../../../../State/state';

const Post = (props: PostType) => {
    return (
        <div>
            <img className={_.img}
                 src="https://img.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg"
                 alt="avatar"/>
            {props.message}
            <div>
                <span>{`likes: ${props.likesCount}`}</span>
            </div>
        </div>
    );
};

export default Post;