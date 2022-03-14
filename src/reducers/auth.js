import {
  AUTH_ERROR,
  LOADING_ON_AUTH_SUBMIT,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SELF_LOADED,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  selfLoaded:null,
  loading: false,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case AUTH_ERROR:
    case LOGOUT:
    case LOGIN_FAIL:
      localStorage.removeItem("jwt");
      return {
        ...state,
        token: null,
        selfLoaded: null,
        isAuthenticated: false,
        loading: false,
      };
    case SELF_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        selfLoaded: payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOADING_ON_AUTH_SUBMIT:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
