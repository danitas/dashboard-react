import { ADD_NEW_TASK } from "./types";

export const addNewTask = ({ title, description }) => {
    console.log("title",title, "description", description)
    return ({
        type: ADD_NEW_TASK,
        payload: { title, description }
    })
};