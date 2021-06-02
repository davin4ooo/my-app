import React from 'react';
import s from './friends-item.module.css';

let FriendsItem = (props) => {
    return(
        <div>
            <div className={s.friendsItem}>
                <div className={s.photo}>
                    <img src='https://thumbs.gfycat.com/GleamingResponsibleAstarte-mobile.jpg' alt='#'></img>
                </div>
                <span> {props.name} </span>
            </div>
        </div>
    )
}
export default FriendsItem;