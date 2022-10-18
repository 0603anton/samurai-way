import React from 'react';
import _ from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {CompanionType} from '../../../State/state';


export const DialogItem = (props: CompanionType) => {
    return (
        <div className={_.companion}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};



