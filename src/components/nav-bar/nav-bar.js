import React from 'react';
import s from './nav-bar.module.css';
import {NavLink} from 'react-router-dom';

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
                <span>Friends</span>
                <div className={s.friendsBlock}>
                   <div className={s.friendsItem}>
                     <div className={s.photo}>
                        <img src='https://thumbs.gfycat.com/GleamingResponsibleAstarte-mobile.jpg' alt='#'></img>
                     </div>
                     
                   </div>
                   <div className={s.friendsItem}>
                     <div className={s.photo}>
                        <img src='https://thumbs.gfycat.com/GleamingResponsibleAstarte-mobile.jpg' alt='#'></img>
                     </div>
                     
                   </div>
                   <div className={s.friendsItem}>
                     <div className={s.photo}>
                        <img src='https://thumbs.gfycat.com/GleamingResponsibleAstarte-mobile.jpg' alt='#'></img>
                     </div>
                     
                   </div>
                 </div>
      </nav>
   )
}

export default NavBar;