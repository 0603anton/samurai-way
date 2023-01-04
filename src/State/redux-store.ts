import {combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
