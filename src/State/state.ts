// КОНСТАНТЫ
import profileReducer, {ProfilePageActionType, ProfilePageType} from './profile-reducer';
import dialogsReducer, {DialogsPageActionType, DialogsPageType} from './dialogs-reducer';
import {UserPageActionType} from './users-reducer';


export type RootStorePropsType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    // dispatch: (action: ActionType) => void
}

export type MyPostPropsType = {
    posts: PostType[]
    addPost: () => void
    updateNewPostText: (text: string) => void
    newPostText: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}


export type CompanionType = {
    name: string
    id: number
}

export type MessageType = {
    id: number
    message: string
}


export type StateType = {
    state: RootStateType
}

export type StatePropsType = {
    // state: RootStateType
    // dispatch: (action: ActionType) => void
}

export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}


export const store: RootStorePropsType = {
    _state: { // приватное свойство напрямую не использовать
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                {id: 1, message: 'How, are you?', likesCount: 15},
                {id: 2, message: 'It`s my first post', likesCount: 5},
                {id: 3, message: 'Yo', likesCount: 5},
                {id: 4, message: 'Yo', likesCount: 5},
                {id: 5, message: 'Yo', likesCount: 5},
                {id: 6, message: 'Yo', likesCount: 5},
            ],
            newPostText: `blalba`,
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: RootStateType) {
        console.log(`smth`)
    },

    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer;
    },

    // dispatch(action) { // {type:`ADD-POST`}
    //
    //     this._state.profilePage = profileReducer(this._state.profilePage, action)
    //     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    //
    //     this._callSubscriber(this._state)
    //
    // },

}









