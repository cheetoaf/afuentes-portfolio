import {ADD_PROJECT, FETCH_PROJECTS} from '../actions/actionTypes';

const initialState = {
    projects: [],
};

const projectReducer =  (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROJECT:
            return { ...state, projects: [...state.projects, action.payload] };
        case FETCH_PROJECTS:
            return { ...state, projects: action.payload };
        default:
            return state;
    }
};

export default projectReducer;