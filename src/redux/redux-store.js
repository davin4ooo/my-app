import {combineReducers, createStore} from "redux";
import dialogReducer from "./dialog-reducer";
import sideBarReducer from "./side-bar-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
    dialogsPage: dialogReducer,
    profilePage: profileReducer,
    sideBar: sideBarReducer
});
let store = createStore(reducers);
export default store;