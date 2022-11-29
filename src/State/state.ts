// КОНСТАНТЫ

const ADD_POST = `ADD-POST`
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const UPDATE_NEW_MESSAGE_DIALOG = `UPDATE-NEW-MESSAGE-DIALOG`
const ADD_MESSAGE = 'ADD-MESSAGE'

export type RootStorePropsType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (state: RootStateType) => void
    // _addPost: () => void
    // _updateNewPostText: (newText: string) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: ActionType) => void
}

export type MyPostPropsType = {
    posts: PostType[]
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    newPostText: string
    dispatch: (action: ActionType) => void
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}


export type DialogsPageType = {
    dialogsData: CompanionType[]
    messageData: MessageType[]
    newMessageText: string
}
export type DialogsPagePropsType = {
    dialogsData: CompanionType[]
    messageData: MessageType[]
    newMessageText: string
    dispatch: (action: ActionType) => void
}

export type CompanionType = {
    name: string
    id: number
}

export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

export type StateType = {
    state: RootStateType
}

export type StatePropsType = {
    state: RootStateType
    dispatch: (action: ActionType) => void
}

export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}

export type ProfilePagePropsType = {
    posts: PostType[]
    dispatch: (action: ActionType) => void
    // updateNewPostText: (newText: string) => void
    // addPostCallback: () => void
    newPostText: string
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
            newMessageText: `stringa`
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
            // addPost:addPost // Функцию почему-то требует не через пропсы, а чтобы она была в этом объекте
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: RootStateType) {
        console.log(`smth`)
    },
    // _addPost() {
    //     const newPost: PostType = {
    //         id: 121,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 10
    //     };
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ``
    //     this._callSubscriber(this._state)
    // },
    // _updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = action.newText! // TODO возможный ноль
    //     this._callSubscriber(this._state)
    // },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // {type:`ADD-POST`}
        if (action.type === ADD_POST) {
            // this._addPost
            const newPost: PostType = {
                id: 121,
                message: this._state.profilePage.newPostText,
                likesCount: 10
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ``
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            // this._updateNewPostText
            this._state.profilePage.newPostText = action.newText // TODO возможный ноль
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_DIALOG) {
            this._state.dialogsPage.newMessageText = action.newTextDialog
            this._callSubscriber(this._state)
        } else if (action.type === ADD_MESSAGE) {
            let messageText = this._state.dialogsPage.newMessageText
            this._state.dialogsPage.messageData.push({id: 6, message: messageText});
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state)
        }
    },

}


// export type ActionType = AddPostActionType | UpdatePostTextActionType

export type ActionType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof createNewMessageTextAC>
    | ReturnType<typeof addNewMessageTextAC>

// export type AddPostActionType = {
//     type: 'ADD-POST'
// }

// export type AddPostActionType = ReturnType<typeof addPostActionCreator> // автоматическое типизирование

// export type UpdatePostTextActionType = {
//     type: 'UPDATE-NEW-POST-TEXT'
//     newText: string
// }

// export type UpdatePostTextActionType = ReturnType<typeof updateNewPostTextAC>
//AC - action creator
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const // если типизация какого-то свойства не может определиться, то прописываем в конце объекта после второй } as const
}

export const updateNewPostTextAC = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
}

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



