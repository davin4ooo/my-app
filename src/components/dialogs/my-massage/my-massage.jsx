import React from 'react';
import {updateNewMassageTextActionCreator, addMassageActionCreator} from '../../../redux/dialog-reducer'
const MyMassage = (props) => {
    
    let addMassage = () => {
        props.dispatch(addMassageActionCreator());
    }
    let onMassageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMassageTextActionCreator(text));
    }
    debugger;
    return (
        <div className='myMassage'>
            <textarea onChange={onMassageChange}  value={props.newMassageText} />
            <button onClick={addMassage}>Sand</button>
        </div>
        
    )
}

export default MyMassage;