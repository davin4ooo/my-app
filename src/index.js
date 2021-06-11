import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/redux-store'
import App from './components/app/app';
import {BrowserRouter} from 'react-router-dom'
import StoreContext from "./store-context";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App store={store} />
            </StoreContext.Provider>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// store.subscribe( () => {
//     let store = store.getState();
//     rerenderEntireTree(store)
// });