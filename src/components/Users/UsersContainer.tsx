import {connect} from 'react-redux';
import Users from './Users';
import {AppStateType} from '../../State/redux-store';
import {Dispatch} from 'redux';
import {followAC, setUsersAC, unfollowAC, UserPageType, UserType} from '../../State/users-reducer';

type mapStateToPropsType = {
    userPage: UserPageType
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

export type UsersPropsTypePresent = mapStateToPropsType & mapDispatchToPropsType


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        userPage: state.userPage
    }
}
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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;