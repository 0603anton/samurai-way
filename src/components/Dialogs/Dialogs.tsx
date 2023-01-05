import React, {ChangeEvent} from 'react';
import _ from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPropsTypePresent} from './DialogsContainer';

// export type DialogsPropsTypePresent = {
//     updateText: (text: string) => void
//     dialogsData: CompanionType[]
//     messageData: MessageType[]
//     newMessageText: string
//     addMessage: () => void
//
// }

export const Dialogs = (props: DialogsPropsTypePresent) => {

    const dialogsElements = props.dialogsPage.dialogsData.map((el) => {
        return (
            <DialogItem name={el.name} id={el.id} key={el.id}/>
        )
    })


    const messagesElement = props.dialogsPage.messageData.map((el) => {
        return (
            <Message message={el.message} id={el.id} key={el.id}/>
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
                        <textarea value={props.dialogsPage.newMessageText}
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

