import React from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import ConnectedTodos from "./Todos";
import ConnectedGoals from "./Goals";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { loading } = this.props;
    if (loading) {
      return <h1> Loading... </h1>;
    }
    return (
      <React.Fragment>
        <ConnectedTodos />
        <ConnectedGoals />
      </React.Fragment>
    );
  }
}

export default connect((state) => ({
  loading: state.loading,
}))(App);
