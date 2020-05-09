import React from "react";
import { connect } from "react-redux";
import List from "./List";
import { handleAddGoal, handleRemoveGoal } from "../actions/goals";

class Goals extends React.Component {
  addGoal = (e) => {
    e.preventDefault();
    this.props.dispatch(
      handleAddGoal(this.input.value, () => (this.input.value = ""))
    );
  };

  removeItem = (item) => {
    this.props.dispatch(handleRemoveGoal(item));
  };

  render() {
    return (
      <div>
        <h1> Goals </h1>
        <input
          type="text"
          placeholder="Add Goal"
          ref={(input) => (this.input = input)}
        />
        <button onClick={this.addGoal}> ADD </button>
        <List tasks={this.props.goals} remove={this.removeItem} />
      </div>
    );
  }
}

export default connect((state) => ({
  goals: state.goals,
}))(Goals);
