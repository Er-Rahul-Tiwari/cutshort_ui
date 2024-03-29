import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import errors from "./errors";

export default combineReducers({
  auth,
  alert,
  errors,
});
