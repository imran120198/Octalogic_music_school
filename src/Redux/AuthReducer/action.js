import axios from "axios";
import * as types from "./actionType";

export const Login = (data) => async (dispatch) => {
  dispatch({ type: types.USER_LOGIN_REQUEST });
  try {
    const res = await axios.post(`http://localhost:8080/user`, data);
    dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data });
    return res.data;
  } catch (err) {
    console.error(err);
    dispatch({ type: types.USER_LOGIN_FAILURE, payload: err });
    throw err;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: types.USER_LOGOUT,
  };
};
