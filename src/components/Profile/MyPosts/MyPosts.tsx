import React, {ChangeEvent} from 'react';
import Post from './Post/Post';
import {MyPostPropsType,} from '../../../State/state';


const MyPosts = (props: MyPostPropsType) => {

    //реализация через use state
    // const [text, setText] = useState<string>(``)

    const postsElements = props.posts.map((el) => {
        return <Post id={el.id} message={el.message} likesCount={el.likesCount}/>
    })

    const onButtonClickAddPostHandler = () => {
        props.addPost()
        // props.dispatch(addPostActionCreator())
    }


    function onCnahgeTextAreaHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
        // let action = updateNewPostTextAC(text)
        // props.dispatch(action)
    }


    return (
        <div>
            <h3>My posts</h3>
            <div>
                {/*<textarea onChange={onCnahgeTextAreaHandler}></textarea>*/}
                {/*<textarea onChange={onPostChangeHandler} ref={newPostElement} value={props.newPostText}/>*/}
                <textarea onChange={onCnahgeTextAreaHandler} value={props.newPostText}/>
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