import {ADD_PROJECT, FETCH_PROJECTS} from './actionTypes';

export const addProject = (project) => ({
    type: ADD_PROJECT,
    payload: project, 
});

export const fetchProjects = (projects) => ({
    type: FETCH_PROJECTS,
    payload: projects,
});

