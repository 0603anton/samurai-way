import React from 'react';
import {addNewMessageTextAC, createNewMessageTextAC, DialogsPageType} from '../../State/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../State/redux-store';
import {Dispatch} from 'redux';

type mapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type mapDispatchToPropsType = {
    updateText: (text: string) => void
    addMessage: () => void
}

export type DialogsPropsTypePresent = mapStateToPropsType & mapDispatchToPropsType


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateText: (text: string) => {
            dispatch(createNewMessageTextAC(text))
        },
        addMessage: () => {
            dispatch(addNewMessageTextAC())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer