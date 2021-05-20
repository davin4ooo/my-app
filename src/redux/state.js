let store =  {
    _state : {
        profilePage: {
            postsData: [
                {id: 1, post: 'hi'},
                {id: 2, post: 'Lol'}
            ],
            newPostText: 'it-samurai'
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
        }, 
        
        sideBar: {
            friends: [
                {id: 1, name: 'Post'},
                {id: 2, name: 'Katergo' },
                {id: 3, name: 'Chaika' },
            ]
        },
    
    
    },
    _callSubscriber() {
        console.log('State was changed')
    },
    getState() {
        return this._state
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },

    // addPost() {
    //     let newPost = {
    //         id: 3,
    //         post: this._state.profilePage.newPostText,
    //     };
    //     this._state.profilePage.postsData.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber();
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber();
    // },
    dispatch(action) {
        
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                post: this._state.profilePage.newPostText,
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === 'APDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        }
    }
    
}

window.store = store;
export default store;