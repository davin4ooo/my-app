const ADD_MASSAGE = 'ADD-MASSAGE';
const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE-NEW-MASSAGE-TEXT';

const dialogReducer = (state, action) => {
    switch(action.type) {
        case ADD_MASSAGE:
            let newMassage = {
                id: 4,
                massage: state.newMassageText,
            };
            state.massagesData.push(newMassage);
            state.newMassageText = '';
            return state;
        case UPDATE_NEW_MASSAGE_TEXT :
            state.newMassageText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addMassageActionCreator = () => ({type: ADD_MASSAGE});
export const updateNewMassageTextActionCreator = (text) => ({type: UPDATE_NEW_MASSAGE_TEXT, newText: text});
export default dialogReducer;