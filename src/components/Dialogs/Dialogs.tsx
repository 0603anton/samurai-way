import React from 'react';
import _ from './Dialogs.module.css'

import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export type CompanionPropsType = {
    name: string
    id: number
}

export type MessagePropsType = {
    message: string
}

export const Dialogs = () => {
    const dialogsData = [
        {id: 1, name: 'companion1'},
        {id: 2, name: 'companion2'},
        {id: 3, name: 'companion3'},
        {id: 4, name: 'companion4'},
        {id: 5, name: 'companion5'},
        {id: 6, name: 'companion6'},
    ]

    const messageData = [
        {di: 1, message: 'Hi'},
        {di: 2, message: 'How are you?'},
        {di: 3, message: 'Yo!'},
        {di: 4, message: 'Yo!'},
        {di: 5, message: 'Yo!'},
        {di: 6, message: 'Yo!'},
    ]

    const dialogsElements = dialogsData.map((el) => {
        return (
            <DialogItem name={el.name} id={el.id}/>
        )
    })

    const messagesElement = messageData.map((el) => {
        return (
            <Message message={el.message}/>
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

