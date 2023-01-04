import React from 'react';

import {ActionType} from '../../../State/state';
import {addPostActionCreator, updateNewPostTextAC} from '../../../State/profile-reducer';
import MyPosts from './MyPosts';
import {StateRootType} from '../../../index';


type MyPostsContainerPropsType = {
    // posts: PostType[]
    // newPostText: string
    store: StateRootType
    dispatch: (action: ActionType) => void
}


const MyPostsContainer = (props: MyPostsContainerPropsType) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                const onButtonClickAddPostHandler = () => {
                    // props.addPost()
                    store.dispatch(addPostActionCreator())
                }

                function onCnahgeTextAreaHandler(text: string) {
                    let action = updateNewPostTextAC(text)
                    store.dispatch(action)
                }

                return <MyPosts
                    posts={store.getState().profilePage.posts} // тут данные уже не через пропс берутся а через контекст
                    updateNewPostText={onCnahgeTextAreaHandler}
                    addPost={onButtonClickAddPostHandler}
                    newPostText={store.getState().profilePage.newPostText}// тут данные уже не через пропс берутся а через контекст
                />
            }
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;