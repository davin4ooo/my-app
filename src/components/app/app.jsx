import React from 'react';
import Profile from '../profile/profile';
import Header from '../header/header';
import NavBar from '../nav-bar/nav-bar';
import {Route} from 'react-router-dom'
import s from './app.module.css'
import DialogsContainer from "../dialogs/dialogs-container";
import UsersContainer from "../users/users-container";


const App = () => {
    return (
        <div>
            <div className={s.appWrapper}>
                <Header/>
                <NavBar/>
                <div className={s.appWrapperContent}>
                    <Route path='/profile'
                           render={() => <Profile />}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer />}/>
                    <Route path='/users'
                           render={() => <UsersContainer />}/>
                </div>
            </div>
        </div>
    )
}

export default App;