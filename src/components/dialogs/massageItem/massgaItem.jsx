import React from 'react';
import s from '../dialogs.module.css';




const MassageItem = (props) => {
    return (
        <div>
            <div className={s.massage}>{props.massage}</div>
        </div>
    )
}


export default MassageItem;