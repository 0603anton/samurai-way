export type RootStorePropsType= {
    _state: RootStateType
    getState: ()=>RootStateType
    _callSubscriber:(state: RootStateType)=>void
    addPost: () => void
    updateNewPostText: (newText: string)=>void
    subscribe: (observer: (state: RootStateType) => void)=>void
}

export type MyPostPropsType = {
    posts: PostType[]
    addPost: () => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}


export type DialogsPageType = {
    dialogsData: CompanionType[]
    messageData: MessageType[]
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
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}

export type ProfilePagePropsType = {
    posts: PostType[]
    updateNewPostText: (newText: string) => void
    addPostCallback: () => void
    newPostText: string
}


export const store:RootStorePropsType = {
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
            ]
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
    getState(){
        return this._state
    },
    _callSubscriber (state: RootStateType) {
        console.log(`smth`)
    },
    addPost () {
        const newPost: PostType = {
            id: 121,
            message: this._state.profilePage.newPostText,
            likesCount: 10
        };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ``
        this._callSubscriber(this._state)
    },
    updateNewPostText (newText: string) {
        store._state.profilePage.newPostText = newText
        this._callSubscriber(store._state)
    },
    subscribe (observer: (state: RootStateType) => void) {
        this._callSubscriber = observer;
    }
}








