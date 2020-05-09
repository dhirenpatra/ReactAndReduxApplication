import { applyMiddleware } from "redux";
import { checker } from "./checker";
import thunk from "redux-thunk";

export default applyMiddleware(thunk, checker);
