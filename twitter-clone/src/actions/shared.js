import { getInitialData } from "../utils/api";
import reveiveUser from "./users";
import reveiveTweet from "./tweets";
import getAuth from "./auth";
import { showLoading, hideLoading } from "react-redux-loading";

const authUser = "tylermcginnis";

const loadInitialState = () => {
  return (dispatch) => {
    dispatch(showLoading());

    return getInitialData().then(({ users, tweets }) => {
      dispatch(reveiveUser(users));
      dispatch(reveiveTweet(tweets));
      dispatch(getAuth(authUser));
      dispatch(hideLoading());
    });
  };
};

export default loadInitialState;
