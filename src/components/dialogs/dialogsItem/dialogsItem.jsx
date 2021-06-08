import React from 'react';
import s from '../dialogs.module.css';
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div>
            <div className={s.dialog}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem;