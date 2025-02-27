import React, {ChangeEvent} from 'react';
import Post from './Post/Post';

import {DialogsPropsTypePresent} from "./MyPostsContainer";


const MyPosts = (props: DialogsPropsTypePresent) => {

    const postsElements = props.profilePage.posts.map((el) => {
        return <Post id={el.id} message={el.message} likesCount={el.likesCount}/>
    })

    const onButtonClickAddPostHandler = () => {
        props.addPost()
    }


    function onCnahgeTextAreaHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        let text = e.currentTarget.value
        props.updateText(text)
    }


    return (
        <div>
            <h3>My posts</h3>
            <div>
                {/*<textarea onChange={onCnahgeTextAreaHandler}></textarea>*/}
                {/*<textarea onChange={onPostChangeHandler} ref={newPostElement} value={props.newPostText}/>*/}
                <textarea onChange={onCnahgeTextAreaHandler} value={props.profilePage.newPostText}/>
            </div>
            <div>
                <button onClick={onButtonClickAddPostHandler}>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;