import {ActionType} from './redux-store';
import {PostType} from './state';


const ADD_POST = `ADD-POST`
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'How, are you?', likesCount: 15},
        {id: 2, message: 'It`s my first post', likesCount: 5},
        {id: 3, message: 'Yo', likesCount: 5},
        {id: 4, message: 'Yo', likesCount: 5},
        {id: 5, message: 'Yo', likesCount: 5},
        {id: 6, message: 'Yo', likesCount: 5},
    ],
    newPostText: `blalba`,
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 121,
                message: state.newPostText,
                likesCount: 10
            };

            return {...state, posts: [...state.posts, newPost], newPostText: ``}
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.payload.text}
        default:
            return state;
    }

}


export type ProfilePageActionType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextAC>
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    } as const // если типизация какого-то свойства не может определиться, то прописываем в конце объекта после второй } as const
}

export const updateNewPostTextAC = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        payload: {
            text
        }
        // newText: text
    } as const
}

export default profileReducer;