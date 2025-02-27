import React from 'react';
import _ from './../Dialogs.module.css';
import {MessageType} from '../../../State/state';

export const Message = (props: MessageType) => {
    return <div className={_.message}>{props.message}</div>;
};

