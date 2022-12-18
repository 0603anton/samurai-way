import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePagePropsType} from '../../State/state';
import MyPostsContainer from "./MyPosts/MyPostsContainer";



export const Profile = (props: ProfilePagePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                // newPostText={props.newPostText}
                //      posts={props.posts}
                     dispatch={props.dispatch}
store={props.store}
                     // addPost={props.addPost}
                     // updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};

