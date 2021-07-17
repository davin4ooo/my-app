import React from 'react';
import s from './users.module.css'
import UsersBlock from "./users-block/users-block";

const Users = (props) => {
    let usersItem = props.users.map(u => <UsersBlock fullName={u.fullName} status={u.status}/> );
    return (
        <div className={s.container}>
            {usersItem}
        </div>
    )
}

export default Users;