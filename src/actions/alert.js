import { v4 as uuid } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

export const setAlert = (msg, alertType, err_key = "", timeout = 1000) => (
  dispatch
) => {
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, err_key, id },
  });
};

export const removeAlert = () => (dispatch) => {
  dispatch({ type: REMOVE_ALERT });
};
