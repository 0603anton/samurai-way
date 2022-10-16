import React from 'react';
import _ from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {CompanionPropsType} from "../Dialogs";

export const DialogItem = (props:CompanionPropsType) => {
    return (
            <div className={_.companion}>
                <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
            </div>
    );
};



