import React from 'react';
import _ from "./../Dialogs.module.css";
import {MessagePropsType} from "../Dialogs";

export const Message = (props:MessagePropsType) => {
    return <div className={_.message}>{props.message}</div>;
};

