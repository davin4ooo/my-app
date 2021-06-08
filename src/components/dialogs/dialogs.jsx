/* eslint-disable react/jsx-no-undef */
import React from 'react';
import s from './dialogs.module.css';
import DialogItem from './dialogsItem/dialogsItem'
import MassageItem from './massageItem/massgaItem'

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);
    let massagesElements = state.massagesData.map(massage => <MassageItem id={massage.id} massage={massage.massage}/>)
    let addMassage = () => {
        props.sendMassage();
    }
    let onMassageChange = (e) => {
        let text = e.target.value;
        props.updateNewMassageTextActionCreator(text);
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
                <textarea onChange={onMassageChange}  value={state.newMassageText} />
                <button onClick={addMassage}>Sand</button>
            </div>
        </div>
    )
}

export default Dialogs;