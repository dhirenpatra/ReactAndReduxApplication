//Library Code
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => listeners.filter((l) => l !== listener);
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const getState = () => state;

  return {
    getState,
    subscribe,
    dispatch,
  };
};

const ADD_GOAL = "ADD_GOAL";
const REMOVE_GOAL = "REMOVE_GOAL";
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// Application Code
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { completed: !todo.completed })
      );
    default:
      return state;
  }
};

// Application Code
const goals = (state = [], action) => {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat(action.goal);
    case REMOVE_GOAL:
      return state.filter((goal) => goal.id !== action.id);
    default:
      return state;
  }
};

const root = (state = {}, action) => {
  return {
    todos: todos(state.todos, action),
    goals: goals(state.goals, action),
  };
};

const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    todo,
  };
};

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

// We will call this like const store = createStore(todo);
const store = createStore(root);

store.subscribe(() => console.log("New State is", store.getState()));

store.dispatch(
  addTodo({
    id: 0,
    task: "Learn Redux",
    completed: false,
  })
);

store.dispatch(
  addTodo({
    id: 1,
    task: "Learn React",
    completed: true,
  })
);

store.dispatch(
  addGoal({
    id: 1,
    task: "Be a fullstack developer",
    completed: true,
  })
);

store.dispatch(
  addGoal({
    id: 2,
    task: "Be a backend developer",
    completed: true,
  })
);

store.dispatch(removeGoal(2));

store.dispatch(removeTodo(1));

store.dispatch(toggleTodo(0));
