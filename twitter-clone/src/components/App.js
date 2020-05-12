import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import loadInitialState from "../actions/shared";
import TweetPage from "./TweetPage";
import LoadingBar from "react-redux-loading";
import DashBoard from "./DashBoard";
import NewTweet from "./NewTweet";
import Nav from "./Nav";

class App extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(loadInitialState());
  };

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            {this.props.loading === true ? (
              <p> Please wait... </p>
            ) : (
              <div>
                <Route path="/" exact component={DashBoard} />
                <Route path="/tweet/:id" component={TweetPage} />
                <Route path="/new" component={NewTweet} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null,
  };
};

export default connect(mapStateToProps)(App);
