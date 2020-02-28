const initialState = {
    count: 0
};

export default function reducer(state = initialState, action, payload) {
    console.log("-=-=-=-payload");
    console.log(payload);
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1};
        default:
            return state
    }
}