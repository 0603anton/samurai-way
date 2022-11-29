import {ActionType, DialogsPageType} from './state';

const UPDATE_NEW_MESSAGE_DIALOG = `UPDATE-NEW-MESSAGE-DIALOG`
const ADD_MESSAGE = 'ADD-MESSAGE'

const dialogsReducer = (state: DialogsPageType, action: ActionType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_DIALOG:
            state.newMessageText = action.newTextDialog
            return state;
            break;
        case ADD_MESSAGE:
            let messageText = state.newMessageText
            state.messageData.push({id: 6, message: messageText});
            state.newMessageText = '';
            return state;
            break;
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