import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/state'
import App from './components/app/app';
import {BrowserRouter} from 'react-router-dom'


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} /> 
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree();
store.subscriber(rerenderEntireTree);