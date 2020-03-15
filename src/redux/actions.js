import { ADD_NEW_TASK, SET_DATA } from "./types";
import { initialState } from "./reducer";
import data from '../data';

export const addNewTask = ({ title, description }) =>  {
    return {
        type: ADD_NEW_TASK,
        payload: { title, description, id: Math.floor(Math.random() * 100000000) }
    }
};

export const setData = () => {
    const taskList = {...initialState.taskList};
    data.map(item => {
        if (item.completed) {
            return taskList.completed.push(item);
        }
        return taskList.open.push(item);
    });
    return { type: SET_DATA, payload: taskList };
};
