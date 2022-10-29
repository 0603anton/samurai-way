import React, {RefObject} from 'react';
import _ from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../State/state';

export const Dialogs = (props: DialogsPageType) => {

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

    const newMessageElement: RefObject<HTMLTextAreaElement> = React.createRef();

    function addMessage() {
        console.log(newMessageElement.current?.value)
    }

    return (
        <div>
            <div className={_.dialogs}>
                <div className={_.companions}>
                    {dialogsElements}
                    <div>
                        <textarea ref={newMessageElement}></textarea>
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

