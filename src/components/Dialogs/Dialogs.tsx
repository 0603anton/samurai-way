import React, {ChangeEvent, MouseEvent} from 'react';
import _ from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {createNewMessageTextAC, addNewMessageTextAC, DialogsPagePropsType} from '../../State/state';

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
        const action = createNewMessageTextAC(text)
        props.dispatch(action)
    }

    function addMessage(e: MouseEvent<HTMLButtonElement>) {
        const action = addNewMessageTextAC()
        props.dispatch(action)
    }

    return (
        <div>
            <div className={_.dialogs}>
                <div className={_.companions}>
                    {dialogsElements}
                    <div>
                        <textarea value={props.newMessageText} onChange={textAreanewMessageHandler}></textarea>
                        // забыл для чего в пропсы кидал newMesageText
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

