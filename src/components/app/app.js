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
          <NavBar />
          <div className={s.appWrapperContent}>
            <Route path='/profile' render={() => 
            <Profile posts={props.state.profilePage.postsData}  newPostText ={props.state.profilePage.newPostText} dispatch={props.dispatch}  />}/>
            <Route path='/dialogs' render={() => 
            <Dialogs dialogs={props.state.dialogsPage.dialogsData} 
            massages={props.state.dialogsPage.massagesData}/>}/>
          </div>
        </div>
      </div>
  )
}

export default App;