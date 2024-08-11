export const initialState = {
    tasks: []
};

export const taskReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, {text:action.payload, completed: false }]
            };
        case 'TOGGLE_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task, index) => {
                    return index === action.payload ? {...task, completed: !task.completed}: task
                })
            }
        case 'REMOVE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter((_,index) => {
                    return index !== action.payload;
                })
            };
        default:
            return state;
    }
};