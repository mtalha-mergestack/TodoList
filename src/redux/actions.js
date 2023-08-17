export const addTodo = text => ({
    type: 'ADD_TODO',
    payload: text
});

export const removeTodo = id => ({
    type: 'REMOVE_TODO',
    payload: id
});
export const editTodo = (editTaskIndex, editTaskValue) => ({
    type: 'EDIT_TODO',
    payload: { index: editTaskIndex, value: editTaskValue }
});
