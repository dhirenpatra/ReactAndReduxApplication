import API from "goals-todos-api";

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo,
  };
};

const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id,
  };
};

const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id,
  };
};

export const handleRemoveTodo = (item) => {
  return (dispatch) => {
    dispatch(removeTodo(item.id));
    return API.deleteTodo(item.id).catch(() => {
      dispatch(addTodo(item));
      alert("Deletion Failed... Try Again !!");
    });
  };
};

export const handleAddTodo = (item, callback) => {
  return (dispatch) => {
    return API.saveTodo(item)
      .then((todo) => {
        dispatch(addTodo(todo));
        callback();
      })
      .catch(() => alert("Failed Try Again"));
  };
};

export const handleToggleTodo = (todo) => {
  return (dispatch) => {
    dispatch(toggleTodo(todo));
    return API.saveTodoToggle(todo.id).catch(() => {
      dispatch(toggleTodo(todo));
      alert("Update Failed... Try Again !!");
    });
  };
};
