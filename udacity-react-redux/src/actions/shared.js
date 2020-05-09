import API from "goals-todos-api";

export const RECEIVE_DATA = "RECEIVE_DATA";

const reveiveData = (todos, goals) => {
  return {
    type: RECEIVE_DATA,
    todos,
    goals,
  };
};

export const handleInitialData = () => {
  return (dispatch) => {
    return Promise.all([API.fetchTodos(), API.fetchGoals()]).then(
      ([todos, goals]) => {
        dispatch(reveiveData(todos, goals));
      }
    );
  };
};
