import React from 'react';

import {addPostActionCreator, ProfilePageType, updateNewPostTextAC} from '../../../State/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../State/redux-store';
import {Dispatch} from 'redux';

type mapStateToPropsTypeProfilePage = {
    profilePage: ProfilePageType
}

type mapDispatchToPropsTypeProfilePage = {
    updateText: (text: string) => void
    addPost: () => void
}

export type DialogsPropsTypePresent = mapStateToPropsTypeProfilePage & mapDispatchToPropsTypeProfilePage


let mapStateToProps = (state: AppStateType): mapStateToPropsTypeProfilePage => {
    return {
        profilePage: state.profilePage
        // здесь данные которые передаём пропсом. Можно разбивать на конкретные подданые см. строку 36 и ниже
        // а я сделал не знаю верно или нет, передал стейт целиком, точнее его часть профайл пейдж, хотя это неверно ждя этого
        // и делают контейнерные компоненты чтобы до презентац доходил мизер данных
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsTypeProfilePage => {
    return {
        updateText: (text: string) => {
            dispatch(dispatch(updateNewPostTextAC(text)))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}


const SuperMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default SuperMyPostsContainer