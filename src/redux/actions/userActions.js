import {SET_USER, LOGOUT_USER} from './actionTypes';

export const setUser = (user) => ({
    type: SET_USER,
    Payload: user,
    });

    export const logoutUser = () => ({
        type:LOGOUT_USER,
    });