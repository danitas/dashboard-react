const initialState = {
    task: {}
};

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'ADD_NEW_TASK':
            return {...state, task: { ...payload }};
        default:
            return state
    }
}