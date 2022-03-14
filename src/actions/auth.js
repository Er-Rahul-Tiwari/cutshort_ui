import axios from "axios";
import { setAlert, removeAlert } from "./alert";
import { setErrorsList } from "./errors";
import {
  LOADING_ON_AUTH_SUBMIT,
  LOGOUT,
  REMOVE_ERRORS,
  REMOVE_ALERT,
} from "./types";
import * as Constants from 'constants/index'

// Dispatch Loading
export const loadingOnSubmit = () => async (dispatch) => {
  await dispatch({ type: LOADING_ON_AUTH_SUBMIT });
  
};

// SELF_AUTH API
// export const selfAuth = () => async (dispatch) => {
//   try {
//     const { data } = await axios.get(`${Constants.API_URL}/user/self`, Constants.HEADER_OPTIONS);
//     if (data.status === 200) {
//       dispatch({
//         type: SELF_LOADED,
//         payload: data.data,
//       });
//     } else {
//       window.localStorage.clear();
//       dispatch({ type: LOGOUT });
//     }
//   } catch (err) {
//     window.localStorage.clear();
//     dispatch({ type: LOGOUT });
//     return undefined;
//   }
// };


// Redirect redirect_step_first
export const redirect_step_first = (history) => async (dispatch) => {
  dispatch({ type: REMOVE_ALERT });
  dispatch({ type: REMOVE_ERRORS });
  history.push("/app/step/1");
};
// Redirect redirect_step_second
export const redirect_step_second = (history) => async (dispatch) => {
  dispatch({ type: REMOVE_ALERT });
  dispatch({ type: REMOVE_ERRORS });
  history.push("/app/step/2");
};
// Redirect redirect_step_third
export const redirect_step_third = (history) => async (dispatch) => {
  dispatch({ type: REMOVE_ALERT });
  dispatch({ type: REMOVE_ERRORS });
  history.push("/app/step/3");
};
// Redirect redirect_step_four
export const redirect_step_four = (history) => async (dispatch) => {
  dispatch({ type: REMOVE_ALERT });
  dispatch({ type: REMOVE_ERRORS });
  history.push("/app/step/4");
};

//Dispatch Confirm password error
export const setPasswordError = (msg, param) => async (dispatch) => {
  dispatch(setErrorsList(msg, param));
};

// Logout
export const logout = () => async (dispatch) => {
  window.localStorage.clear();
  dispatch({ type: LOGOUT });
  dispatch(removeAlert());
};
