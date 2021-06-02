/* eslint-disable react/jsx-no-undef */
import React from 'react';
import s from './dialogs.module.css';
import DialogItem from './dialogsItem/dialogsItem'
import MassageItem from './massageItem/massgaItem'
import MyMassage from './my-massage/my-massage';

const Dialogs = (props) => {
    
    let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);
    let massagesElements = props.dialogsPage.massagesData.map(massage => <MassageItem id={massage.id} massage={massage.massage}/>)
   
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.massages}>
                {massagesElements}
            </div>
            <MyMassage newMassageText={props.dialogsPage.newMassageText} dispatch={props.dispatch}/>
        </div>
    )
}

export default Dialogs;