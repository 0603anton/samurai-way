import React, {ChangeEvent, RefObject, useState} from 'react';
import Post from './Post/Post';
import {MyPostPropsType, ProfilePagePropsType} from '../../../State/state';


const MyPosts = (props: MyPostPropsType) => {

    // const [text, setText] = useState<string>(``)

    const postsElements = props.posts.map((el) => {
        return <Post id={el.id} message={el.message} likesCount={el.likesCount}/>
    })

    const newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

    const onButtonClickAddPostHandler = () => {
        // let text = newPostElement.current ? newPostElement.current.value : `---` вместо этой строки if`ы
        if (newPostElement.current){
        props.addPost(newPostElement.current.value)
            }
    }

    // function onTextAreaHandler(e:ChangeEvent<HTMLTextAreaElement>) {
    //     setText(e.currentTarget.value)
    //
    // }


    return (
        <div>
            <h3>My posts</h3>
            <div>
                {/*<textarea onChange={onTextAreaHandler}></textarea>*/}
                <textarea ref={newPostElement}></textarea>
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