const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, followed:false, fullName:'Dmitriy', status:'Lalka', location:{country: 'Belarus', city: 'Minsk'}},
        {id: 2, followed:true, fullName:'Chaika', status:'Podsos', location:{country: 'Ukraine', city: 'Kiev'}},
        {id: 3, followed:true, fullName:'Gordon', status:'Businka', location:{country: 'Ukraine', city: 'Kiev'}},
        {id: 4, followed:true, fullName:'Viacheslav', status:'Nark', location:{country: 'Ukraine', city: 'Kiev'}},
    ],
};
const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return state;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return state;
                })
            }
        }
        case SET_USERS: {
            return {...state, users: [...state.users, action.users]}
        }
        default:
            return state;
    }
};
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export default usersReducer;