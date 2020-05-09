import API from "goals-todos-api";

export const ADD_GOAL = "ADD_GOAL";
export const REMOVE_GOAL = "REMOVE_GOAL";

const addGoal = (goal) => {
  return {
    type: ADD_GOAL,
    goal,
  };
};

const removeGoal = (id) => {
  return {
    type: REMOVE_GOAL,
    id,
  };
};

export const handleAddGoal = (goal, callback) => {
  return (dispatch) => {
    return API.saveGoal(goal)
      .then((goal) => {
        dispatch(addGoal(goal));
        callback();
      })
      .catch(() => alert("Failed Try Again"));
  };
};

export const handleRemoveGoal = (goal) => {
  return (dispatch) => {
    dispatch(removeGoal(goal.id));
    return API.deleteTodo(goal.id).catch(() => {
      dispatch(addGoal(goal));
      alert("Deletion Failed... Try Again !!");
    });
  };
};
