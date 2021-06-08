/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {addMassageActionCreator, updateNewMassageTextActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./dialogs";

const DialogsContainer = (props) => {
    let addMassage = () => {
        props.store.dispatch(addMassageActionCreator());
    }
    let onMassageChange = (body) => {
        props.store.dispatch(updateNewMassageTextActionCreator(body));
    }
    return (
        <Dialogs updateNewMassageTextActionCreator={onMassageChange}
                 sendMassage={addMassage} dialogsPage={props.store.getState().dialogsPage}/>
    )
}

export default DialogsContainer;