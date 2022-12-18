import React from 'react';
import {DialogsPagePropsType} from '../../State/state';
import {addNewMessageTextAC, createNewMessageTextAC} from '../../State/dialogs-reducer';
import {Dialogs} from "./Dialogs";



export const DialogsContainer = (props: DialogsPagePropsType) => {

    const textAreaNewMessageHandler = (text:string) => {
        const action = createNewMessageTextAC(text)
        props.dispatch(action)
    }

    function addMessage() {
        const action = addNewMessageTextAC()
        props.dispatch(action)
    }

    return (
        <Dialogs
            addMessage={addMessage}
            updateText={textAreaNewMessageHandler}
            dialogsData={props.store.dialogsPage.dialogsData}
            messageData={props.store.dialogsPage.messageData}
            newMessageText={props.store.dialogsPage.newMessageText}
        />
    );
};

