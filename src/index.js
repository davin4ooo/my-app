import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/redux-store'
import App from './components/app/app';
import {BrowserRouter} from 'react-router-dom'

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// store.subscribe( () => {
//     let store = store.getState();
//     rerenderEntireTree(store)
// });