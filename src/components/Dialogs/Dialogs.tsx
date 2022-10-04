import React from 'react';
import _ from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div>
            <div className={_.dialogs}>
                <div className={_.companions}>
                    <div className={_.companion}>companion1</div>
                    <div className={_.companion}>companion2</div>
                    <div className={_.companion}>companion3</div>
                    <div className={_.companion}>companion4</div>
                    <div className={_.companion}>companion5</div>
                    <div className={_.companion}>companion6</div>
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

