import { SET_ERRORS_LIST, REMOVE_ERRORS } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ERRORS_LIST:
      return {
        ...state,
        ...payload,
      };
    case REMOVE_ERRORS:
      return (state = {});
    default:
      return state;
  }
}
