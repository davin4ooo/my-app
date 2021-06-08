import dialogReducer from './dialog-reducer';
import profileReducer from './profile-reducer';
import sideBarReducer from './side-bar-reducer';

let store =  {
    _state : {
        profilePage: {
            postsData: [
                {id: 1, post: 'hi'},
                {id: 2, post: 'Lol'}
            ],
            newPostText: 'it-samurai',
            
        },
    
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Post' },
                {id: 2, name: 'Katergo' },
                {id: 3, name: 'Chaika' },
                {id: 4, name: 'Nigga' },
                {id: 5, name: 'Valvet' },
            ],
            massagesData: [
                {id: 1, massage: 'Hi' },
                {id: 2, massage: 'Lol' },
                {id: 3, massage: 'wts' },
            ],
            newMassageText: 'Hi',
        }, 
        
        sideBar: {
            friends: [
                {id: 1, name: 'Post'},
                {id: 2, name: 'Katergo' },
                {id: 3, name: 'Chaika' },
            ]
        },
    
    
    },
    _callSubscribe() {
        console.log('State was changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sideBarPage = sideBarReducer(this._state.sideBarPage, action);
        this._callSubscribe(this._state);
    }
    
}
export default store;
window.store = store;