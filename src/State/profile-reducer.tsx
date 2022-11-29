import {ActionType, PostType, ProfilePageType} from './state';

const ADD_POST = `ADD-POST`
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const profileReducer = (state: ProfilePageType, action: ActionType) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 121,
                message: state.newPostText,
                likesCount: 10
            };
            state.posts.push(newPost)
            state.newPostText = ``
            return state;
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText // TODO возможный ноль
            return state;
            break;

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
        newText: text
    } as const
}

export default profileReducer;