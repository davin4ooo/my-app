import React from 'react';
import s from './friends.module.css';
import FriendsItem from './friends-item/friends-item'

let Friends = (props) => {
    let friendsName = props.friends.friends.map(name => <FriendsItem id={name.id} name={name.name} />)
    return (
      <div>
        <span>Friends</span>
        <div className={s.friendsBlock}>
          {friendsName}
        </div>
      </div>
    )
}
export default Friends;