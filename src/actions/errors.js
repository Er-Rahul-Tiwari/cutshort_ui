import { SET_ERRORS_LIST } from "./types";

export const setErrorsList = (msg, err_key = "", timeout = 2000) => (
  dispatch
) => {
  dispatch({
    type: SET_ERRORS_LIST,
    payload: { [err_key]: msg },
  });
};
