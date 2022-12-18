import {ActionType, DialogsPageType} from './state';

const UPDATE_NEW_MESSAGE_DIALOG = `UPDATE-NEW-MESSAGE-DIALOG`
const ADD_MESSAGE = 'ADD-MESSAGE'

const initialState = {
    dialogsData: [
        {id: 1, name: 'companion1'},
        {id: 2, name: 'companion2'},
        {id: 3, name: 'companion3'},
        {id: 4, name: 'companion4'},
        {id: 5, name: 'companion5'},
        {id: 6, name: 'companion6'},
    ],
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo!'},
        {id: 4, message: 'Yo!'},
        {id: 5, message: 'Yo!'},
        {id: 6, message: 'Yo!'},
    ],
    newMessageText: `stringa`,
    sidebar: {}
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_DIALOG:
            state.newMessageText = action.newTextDialog
            return state;
        case ADD_MESSAGE:
            let messageText = state.newMessageText
            state.messageData.push({id: 6, message: messageText});
            state.newMessageText = '';
            return state;
        default:
            return state;
    }
}

export type DialogsPageActionType =
    | ReturnType<typeof createNewMessageTextAC>
    | ReturnType<typeof addNewMessageTextAC>


export const createNewMessageTextAC = (text: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_DIALOG,
        newTextDialog: text
    } as const
}

export const addNewMessageTextAC = () => {
    return {
        type: ADD_MESSAGE,
    } as const
}

export default dialogsReducer;