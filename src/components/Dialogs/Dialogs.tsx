import React from 'react';
import _ from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {CompanionType, MessageType} from '../../App';


export type DialogsPropsType = {
    dialogsData: CompanionType[]
    messageData: MessageType[]
}


export const Dialogs = (props: DialogsPropsType) => {

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

    return (
        <div>
            <div className={_.dialogs}>
                <div className={_.companions}>
                    {dialogsElements}
                </div>
                <div className={_.chats}>
                    {messagesElement}
                </div>
            </div>
        </div>
    );
};

