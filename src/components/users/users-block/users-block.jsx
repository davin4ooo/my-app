import React from 'react';
import s from './users-block.module.css';

const UsersBlock = (props) => {
    return (
        <div className={s.container}>
            <div className={s.containerAva}>
                <div className={s.ava}>
                    <img src='https://m.media-amazon.com/images/M/MV5BMTk5NTMwMzI2Ml5BMl5BanBnXkFtZTYwNzAyOTE2._V1_UY1200_CR115,0,630,1200_AL_.jpg' alt=''/>
                </div>
                <button className={s.button}>Unfollow</button>
            </div>
            <div className={s.infoUser}>
                <div className={s.infoItem} >{props.fullName}</div>
                <div className={s.infoItem} >{props.status}</div>
            </div>
        </div>
    )
}

export default UsersBlock;