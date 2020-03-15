export const initialState = {
    task: {},
    taskList: {
        open: [],
        inprogress: [],
        completed: [],
        onhold: []
    }
};

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'ADD_NEW_TASK':
            return {
                ...state,
                taskList: {
                    ...state.taskList,
                    open: [
                        ...state.taskList.open,
                        {
                            title: payload.title,
                            description: payload.description
                        }
                    ]
                }
            };
        case 'SET_DATA':
            return {...state, taskList: {...payload} };
        default:
            return state;
    }
}