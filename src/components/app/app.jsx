import React from 'react';
import Profile from '../profile/profile';
import Header from '../header/header';
import NavBar from '../nav-bar/nav-bar';
import Dialogs from '../dialogs/dialogs';
import {Route} from 'react-router-dom'
import s from './app.module.css'


const App = (props) => {
  return (
      <div>
        <div className={s.appWrapper}>
          <Header/>
          <NavBar friends={props.state.sideBar.friends} />
          <div className={s.appWrapperContent}>
            <Route path='/profile' render={() => 
            <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}  />}/>
            <Route path='/dialogs' render={() => 
            <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
          </div>
        </div>
      </div>
  )
}

export default App;