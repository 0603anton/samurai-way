import React, {ChangeEvent} from 'react';
import _ from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {CompanionType, MessageType} from '../../State/state';

export type DialogsPropsTypePresent = {
    updateText: (text: string) => void
    dialogsData: CompanionType[]
    messageData: MessageType[]
    newMessageText: string
    addMessage: () => void

}

export const Dialogs = (props: DialogsPropsTypePresent) => {

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
        props.updateText(text)
    }

    function addMessage() {
        props.addMessage()
    }

    return (
        <div>
            <div className={_.dialogs}>
                <div className={_.companions}>
                    {dialogsElements}
                    <div>
                        <textarea value={props.newMessageText}
                                  onChange={textAreanewMessageHandler}></textarea>
                        {/*// забыл для чего в пропсы кидал newMesageText*/}
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

