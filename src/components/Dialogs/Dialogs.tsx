import React, {ChangeEvent, MouseEvent} from 'react';
import _ from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {createNewMessageTextAC, DialogsPagePropsType} from '../../State/state';

export const Dialogs = (props: DialogsPagePropsType) => {

    const dialogsElements = props.dialogsData.map((el) => {
        return (
            <DialogItem name={el.name} id={el.id}/>
        )
    })

    const messagesElement = props.messageData.map((el) => {
        return (
            <Message message={el.message} id={el.id}/>
        )
    })

    // const newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef();
    //
    const textAreanewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        let action = createNewMessageTextAC(text)
        props.dispatch(action)
    }

    function addMessage(e: MouseEvent<HTMLButtonElement>) {

    }

    return (
        <div>
            <div className={_.dialogs}>
                <div className={_.companions}>
                    {dialogsElements}
                    <div>
                        <textarea onChange={textAreanewMessageHandler}></textarea>
                        <button onClick={addMessage}>Add</button>
                    </div>
                </div>
                <div className={_.chats}>
                    {messagesElement}
                </div>
            </div>
        </div>
    );
};

