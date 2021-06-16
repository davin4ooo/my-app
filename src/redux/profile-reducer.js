
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {

    postsData: [
        {id: 1, post: 'hi'},
        {id: 2, post: 'Lol'}
    ],
    newPostText: 'it-samurai',


};
const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let body = state.newPostText;
            return {
                ...state,
                postsData: [...state.postsData, {id: 4, post: body}],
                newPostText : ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
};
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export default profileReducer;