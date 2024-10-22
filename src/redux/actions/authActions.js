import {SET_USER, LOGOUT_USER} from './actionTypes';

export const loginUser = (user) => ({
    type:SET_USER,
    payload:user,
});

export const logoutUser = () => ({
    type:LOGOUT_USER,
});