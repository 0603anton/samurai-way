import {combineReducers, createStore} from 'redux';
import dialogsReducer, {DialogsPageActionType} from './dialogs-reducer';
import profileReducer, {ProfilePageActionType} from './profile-reducer';
import {UserPageActionType, userReducer} from './users-reducer';


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userPage: userReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

export type ActionType = DialogsPageActionType | ProfilePageActionType | UserPageActionType
