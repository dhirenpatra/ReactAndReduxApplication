import { ADD_TODO } from "../actions/todos";
import { ADD_GOAL } from "../actions/goals";

export const checker = (store) => (next) => (action) => {
  if (
    action.type === ADD_TODO &&
    action.todo.name.toLowerCase().includes("bitcoin")
  ) {
    return alert("Not Allowed...");
  }
  if (
    action.type === ADD_GOAL &&
    action.goal.name.toLowerCase().includes("bitcoin")
  ) {
    return alert("Not Allowed...");
  }
  return next(action);
};
