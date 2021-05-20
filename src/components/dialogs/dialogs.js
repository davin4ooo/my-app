/* eslint-disable react/jsx-no-undef */
import React from 'react';
import s from './dialogs.module.css';
import DialogItem from './dialogsItem/dialogsItem'
import MassageItem from './massageItem/massgaItem'


const Dialogs = (props) => {
    
    let dialogsElements = props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);
    let massagesElements = props.massages.map(massage => <MassageItem id={massage.id} massage={massage.massage}/>)
   
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.massages}>
                {massagesElements}
            </div>
        </div>
    )
}

export default Dialogs;