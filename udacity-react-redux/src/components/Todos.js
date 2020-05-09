import React from "react";
import { connect } from "react-redux";
import {
  handleAddTodo,
  handleRemoveTodo,
  handleToggleTodo,
} from "../actions/todos";
import List from "./List";

class Todos extends React.Component {
  addItem = (e) => {
    e.preventDefault();
    this.props.dispatch(
      handleAddTodo(this.input.value, () => (this.input.value = ""))
    );
  };

  removeItem = (item) => {
    this.props.dispatch(handleRemoveTodo(item));
  };

  toggle = (item) => {
    this.props.dispatch(handleToggleTodo(item));
  };

  render() {
    return (
      <div>
        <h1> Todos </h1>
        <input
          type="text"
          placeholder="Add TODO"
          ref={(input) => (this.input = input)}
        />
        <button onClick={this.addItem}> ADD </button>
        <List
          tasks={this.props.todos}
          remove={this.removeItem}
          toggle={this.toggle}
        />
      </div>
    );
  }
}

export default connect((state) => ({
  todos: state.todos,
}))(Todos);
