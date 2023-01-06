import {ActionType} from './redux-store';

// константы для экшенов

const UNFOLLOW = 'UNFOLLOW'
const FOLLOW = 'FOLLOW'
const SET_USERS = 'SET_USERS'
// типизация странички/ стейта

export type UserPageType = {
    users: UserType[]
}

export type UserType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export type LocationType = {
    city: string
    country: string
}

//сам стейт по умолчанию initialState

const initialState: UserPageType = {
    users: [
        // {
        //     id: 1,
        //     followed: true,
        //     fullName: 'Anton',
        //     status: 'I like CODE',
        //     location: {city: `Moscow`, country: `Russia`}
        // },
        // {
        //     id: 2,
        //     followed: true,
        //     fullName: 'Anton',
        //     status: 'I like CODE',
        //     location: {city: `Moscow`, country: `Russia`}
        // },
        // {
        //     id: 3,
        //     followed: false,
        //     fullName: 'Anton',
        //     status: 'I like CODE',
        //     location: {city: `Moscow`, country: `Russia`}
        // },
        // {
        //     id: 4,
        //     followed: false,
        //     fullName: 'Anton',
        //     status: 'I like CODE',
        //     location: {city: `Moscow`, country: `Russia`}
        // },
    ]
}

// конструкция редьюсера

export const userReducer = (state: UserPageType = initialState, action: ActionType): UserPageType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((el) => el.id === action.payload.userId ? {...el, followed: !el.followed} : el)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((el) => el.id === action.payload.userId ? {...el, followed: !el.followed} : el)
            }
        case 'SET_USERS': {
            return {...state, users: [...state.users, ...action.payload.users]}
        }
        default:
            return state;
    }

}


export type UserPageActionType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>
export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        payload: {
            userId
        }
    } as const // если типизация какого-то свойства не может определиться, то прописываем в конце объекта после второй } as const
}

export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId
        }
    } as const
}

export const setUsersAC = (users: UserType[]) => {
    return {
        type: SET_USERS,
        payload: {
            users
        }
    } as const
}