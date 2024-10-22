import {SET_USER,LOGOUT_USER} from '../actions/actionTypes';

const initialStae = {
    user:null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {...state, user: action.payload};
        case LOGOUT_USER:
            return {...state, user: action.null};
        default:
            return state;
    }
};

export default userReducer;