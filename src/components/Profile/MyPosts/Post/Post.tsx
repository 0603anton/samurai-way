import React from 'react';
import _ from './Post.module.css'

type PostPropsType ={
    message:string;
    likes:number;
}

const Post = (props:PostPropsType) => {
    return (
        <div>
            <img className={_.img} src="https://img.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg" alt="avatar"/>
            {props.message}
            <div>
            <span>{`likes: ${props.likes}`}</span>
            </div>
        </div>
    );
};

export default Post;