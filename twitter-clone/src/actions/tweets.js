import { saveLikeToggle, saveTweet } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVED_TWEETS = "RECEIVED_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const ADD_TWEET = "ADD_TWEET";

const receiveTweet = (tweets) => {
  return {
    type: RECEIVED_TWEETS,
    tweets,
  };
};

const toggleTweet = ({ id, authedUser, hasLiked }) => {
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked,
  };
};

const addTweet = (tweet) => {
  return {
    type: ADD_TWEET,
    tweet,
  };
};

export const handleAddTweet = (text, replyingTo) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    // text, author, replyingTo
    dispatch(showLoading());

    return saveTweet({ text, author: authedUser, replyingTo })
      .then((tweet) => dispatch(addTweet(tweet)))
      .then(() => dispatch(hideLoading()));
  };
};

export const handleToggleTweet = (info) => {
  return (dispatch) => {
    dispatch(toggleTweet(info));
    return saveLikeToggle(info).catch((error) => {
      console.warn("Error in Handling Tweet : ", error);
      dispatch(toggleTweet(info));
      alert("Error While Toggling the Tweet , Please try later !!");
    });
  };
};

export default receiveTweet;
