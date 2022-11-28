import React, {ChangeEvent, RefObject, useState} from 'react';
import Post from './Post/Post';
import {
    addPostActionCreator,

    MyPostPropsType,
    updateNewPostTextAC,

} from '../../../State/state';


const MyPosts = (props: MyPostPropsType) => {

    //реализация через use state
    // const [text, setText] = useState<string>(``)

    const postsElements = props.posts.map((el) => {
        return <Post id={el.id} message={el.message} likesCount={el.likesCount}/>
    })

    const newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

    const onButtonClickAddPostHandler = () => {
        // let text = newPostElement.current ? newPostElement.current.value : `---` вместо этой строки if`ы
        // if (newPostElement.current) {
        // props.addPost(newPostElement.current.value)
        // newPostElement.current.value = ``;
        // }
        // старая реализация когда параметром передавали значение текстареа,
        // а теперь напрямую берём из стэйта, а туда передаём через хандлер в общем другой функцией
        // props.addPost()
        props.dispatch(addPostActionCreator())
    }

    //    //реализация через use state
    //    function onCnahgeTextAreaHandler(e:ChangeEvent<HTMLTextAreaElement>) {
    //     setText(e.currentTarget.value)
    // }

    function onCnahgeTextAreaHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        // props.updateNewPostText(e.currentTarget.value)
        let text = e.currentTarget.value
        let action = updateNewPostTextAC(text)
        props.dispatch(action)
    }

    // const onPostChangeHandler = () => {
    //     if (newPostElement.current) {
    //         props.updateNewPostText(newPostElement.current.value)
    //     }
    // }

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