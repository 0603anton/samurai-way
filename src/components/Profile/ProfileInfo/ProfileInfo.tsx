import React from 'react';
import _ from '../Profile.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={_.contentImg} src="https://wallpaperaccess.com/full/1131217.jpg" alt=""/>
            </div>
            <div>
                ava+description
            </div>
        </div>
    );
};

