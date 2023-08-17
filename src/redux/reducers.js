const initialState = { todos: [] };

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return { todos: [...state.todos, action.payload] };
        case 'REMOVE_TODO':
            return { todos: state.todos.filter((todo, index) => index != action.payload) };
        case 'EDIT_TODO':
            return { todos: state.todos.map((task, i) => (i == action.payload.index ? action.payload.value : task)) };
        default:
            return state;
    }
};

export default todoReducer;
