import React from 'react';
import s from './nav-bar.module.css';
import {NavLink} from 'react-router-dom';
import Friends from './friends/friends'

const NavBar = (props) => {
    return (
      <nav className={s.nav}>
                <div className={s.item}>
                   <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                   <NavLink to='/dialogs' activeClassName={s.active}>Masseges</NavLink>  
                </div>
                <div className={s.item}>
                   <NavLink to='/news' activeClassName={s.active}>News</NavLink>  
                </div>
                <div className={s.item}>
                   <NavLink to='/music' activeClassName={s.active}>Music</NavLink>  
                </div>
                <div className={s.item}>
                   <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
                </div>
                <Friends friends={props.friends} />
      </nav>
   )
}

export default NavBar;