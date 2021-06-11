/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {addMassageActionCreator, updateNewMassageTextActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./dialogs";
import StoreContext from "../../store-context";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            { (store) => {
                let addMassage = () => {
                store.dispatch(addMassageActionCreator());
            }
                let onMassageChange = (body) => {
                store.dispatch(updateNewMassageTextActionCreator(body));
            }
                return <Dialogs updateNewMassageTextActionCreator={onMassageChange}
                         sendMassage={addMassage} dialogsPage={store.getState().dialogsPage}/>}
            }

        </StoreContext.Consumer>
    )
}

export default DialogsContainer;