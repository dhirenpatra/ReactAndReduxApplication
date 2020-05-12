import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Tweet from "./Tweet";

class DashBoard extends Component {
  static propTypes = {
    tweetsId: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div>
        <h3 className="center">Your DashBoard</h3>
        <ul className="dashboard-list">
          {this.props.tweetsId.map((tweet) => (
            <li key={tweet}>
              <Tweet id={tweet} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ tweets }) => {
  return {
    tweetsId: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    ),
  };
};

export default connect(mapStateToProps)(DashBoard);
