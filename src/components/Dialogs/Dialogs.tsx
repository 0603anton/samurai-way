import React from 'react';
import _ from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type CompanionPropsType = {
    name: string
    id: number
}

const Companion = (props: CompanionPropsType) => {
    return (
        <div className={_.companion}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};


export const Dialogs = () => {
    return (
        <div>
            <div className={_.dialogs}>
                <div className={_.companions}>
                    <Companion name={`companion1`} id={1}/>
                    <Companion name={`companion2`} id={2}/>
                    <Companion name={`companion3`} id={3}/>
                    <Companion name={`companion4`} id={4}/>
                    <Companion name={`companion5`} id={5}/>
                    <Companion name={`companion6`} id={6}/>
                </div>
                <div className={_.chats}>
                    <div className={_.message}>hi</div>
                    <div className={_.message}>how are you
                        ?
                    </div>
                    <div className={_.message}>Yo</div>
                </div>
            </div>
        </div>
    );
};

