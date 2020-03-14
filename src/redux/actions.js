import { ADD_NEW_TASK } from "./types";

export const addNewTask = ({ title, description }) => ({
    type: ADD_NEW_TASK,
    payload: { title, description, id: Math.floor(Math.random() * 100000000) }
});