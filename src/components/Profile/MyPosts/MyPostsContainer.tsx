import React from 'react';

import {ActionType} from '../../../State/state';
import {addPostActionCreator, updateNewPostTextAC} from '../../../State/profile-reducer';
import MyPosts from "./MyPosts";
import {StateRootType} from "../../../index";

type MyPostsContainerPropsType={
    // posts: PostType[]
    // newPostText: string
    store: StateRootType
dispatch: (action: ActionType) => void
}


const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    const onButtonClickAddPostHandler = () => {
        // props.addPost()
        props.dispatch(addPostActionCreator())
    }

    function onCnahgeTextAreaHandler(text:string) {
        let action = updateNewPostTextAC(text)
        props.dispatch(action)
    }


    return (
 <MyPosts
     posts={props.store.profilePage.posts}
     updateNewPostText={onCnahgeTextAreaHandler}
     addPost={onButtonClickAddPostHandler}
     newPostText={props.store.profilePage.newPostText} />
    );
};

export default MyPostsContainer;