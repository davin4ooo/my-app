import React from 'react';
import Profile from '../profile/profile';
import Header from '../header/header';
import NavBar from '../nav-bar/nav-bar';
import {Route} from 'react-router-dom'
import s from './app.module.css'
import DialogsContainer from "../dialogs/dialogs-container";


const App = (props) => {
  return (
      <div>
        <div className={s.appWrapper}>
          <Header/>
          <NavBar friends={props.store.getState().sideBar.friends} />
          <div className={s.appWrapperContent}>
            <Route path='/profile'
                   render={() => <Profile store={props.store}   />}/>
            <Route path='/dialogs'
                   render={() => <DialogsContainer store={props.store} />}/>
          </div>
        </div>
      </div>
  )
}

export default App;