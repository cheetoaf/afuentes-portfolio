import { combineReducers } from 'redux';
import userReducer from './userReducer';
import projectReducer from './projectReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    user: userReducer,
    projects: projectReducer,
    auth: authReducer,
});

export default rootReducer;


