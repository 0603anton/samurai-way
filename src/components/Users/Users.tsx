import React from 'react';
import {UsersPropsTypePresent} from './UsersContainer';
import s from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../Assets/2202112.png';

const Users = (props: UsersPropsTypePresent) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            });
        }
    }
    return (
        <div className={s.container}>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img
                                src={u.photos.small !== null ? u.photos.small : userPhoto}
                                alt="avatar"/>
                        </div>
                        <div>{u.followed
                            ? <button onClick={() => (props.unfollow(u.id))}> Unfollow</button>
                            : <button onClick={() => (props.follow(u.id))}> Follow</button>}</div>
                    </span>
                    <span>
                        <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>
                        <span>
                            <div>{`u.location.country`}</div>
                            <div>{`u.location.city`}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;