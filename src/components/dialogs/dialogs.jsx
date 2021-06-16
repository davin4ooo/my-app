/* eslint-disable react/jsx-no-undef */
import React from 'react';
import s from './dialogs.module.css';
import DialogItem from './dialogsItem/dialogsItem'
import MassageItem from './massageItem/massgaItem'

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);
    let massagesElements = props.dialogsPage.massagesData.map(massage => <MassageItem id={massage.id} massage={massage.massage}/>)
    let addMassage = () => {
        props.addMassage();
    }
    let onMassageChange = (e) => {
        let text = e.target.value;
        props.onMassageChange(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.massages}>
                {massagesElements}
            </div>
            <div className='myMassage'>
                <textarea onChange={onMassageChange}  value={props.dialogsPage.newMassageText} />
                <button onClick={addMassage}>Sand</button>
            </div>
        </div>
    )
}

export default Dialogs;