const ADD_MASSAGE = 'ADD-MASSAGE';
const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE-NEW-MASSAGE-TEXT';

let initialState = {
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
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MASSAGE: {
            let body = state.newMassageText;
            return {
                ...state,
                massagesData: [...state.massagesData, {id: 4, massage:body} ],
                newMassageText: ''
            }
        }

        case UPDATE_NEW_MASSAGE_TEXT : {
            return {
                ...state,
                newMassageText: action.newText
            }
        }
        default:
            return state;
    }
}
export const addMassageActionCreator = () => ({type: ADD_MASSAGE});
export const updateNewMassageTextActionCreator = (text) => ({type: UPDATE_NEW_MASSAGE_TEXT, newText: text});
export default dialogReducer;