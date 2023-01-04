import {ActionType, CompanionType, MessageType} from './state';

const UPDATE_NEW_MESSAGE_DIALOG = `UPDATE-NEW-MESSAGE-DIALOG`
const ADD_MESSAGE = 'ADD-MESSAGE'

export type DialogsPageType = {
    dialogsData: CompanionType[]
    messageData: MessageType[]
    newMessageText: string
    sidebar: object
}

const initialState: DialogsPageType = {
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

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_DIALOG:
            return {...state, newMessageText:action.payload.text}
        case ADD_MESSAGE:
            let messageText = state.newMessageText
            // state.messageData.push({id: 6, message: messageText});
            // state.newMessageText = '';
            return {...state, messageData:[...state.messageData,{id: 6, message: messageText} ], newMessageText:``}
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
        payload:{
            text
        }
    } as const
}

export const addNewMessageTextAC = () => {
    return {
        type: ADD_MESSAGE,
    } as const
}

export default dialogsReducer;