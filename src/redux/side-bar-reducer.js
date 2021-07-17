let initialState = {
    friends: [
        {id: 1, name: 'Post'},
        {id: 2, name: 'Katergo'},
        {id: 3, name: 'Chaika'},
    ]
};
const sideBarReducer = (state = initialState) => {
    return {
        ...state,
        friends: [...state.friends]
    }
}
export default sideBarReducer;