import {connect} from 'react-redux';
import Users from './Users';
import {AppStateType} from '../../State/redux-store';
import {Dispatch} from 'redux';
import {followAC, setUsersAC, unfollowAC, UserType} from '../../State/users-reducer';
import UsersC from "./UsersС";

type mapStateToPropsType = {
    users: UserType[]
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

export type UsersPropsTypePresent = mapStateToPropsType & mapDispatchToPropsType

// для передачи данных
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.userPage.users
    } // сюда только те данные которые дейтсвительно нужны в пропсах не надо весь стейт туда кидать
}

// для передачи коллбэков
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);
export default UsersContainer;