import { LOGIN, LOGOUT, ERROR } from "../reducers/types";
import axios from "axios";
import Cookie from "js-cookie";
import Swal from "sweetalert2";

const BASE_URL = "https://my-udemy-api.herokuapp.com/api/v1/user";

export const loginUser = (user) => async (dispatch) => {
  try {
    const res = await axios.post(`${BASE_URL}/signin`, user);
    Cookie.set("token", res.data.token);
    Swal.fire("Welcome", "", "info");
    dispatch({
      type: LOGIN,
      payload: res.data,
    });
    console.log(res.data);
  } catch (err) {
    const errors = err.response.data.errors;
    dispatch({
      type: ERROR,
      payload: errors,
    });
    console.log(errors);
  }
};

export const logoutUser = (user) => async (dispatch) => {
  dispatch({
    type: LOGOUT,
    payload: user,
  });
  console.log("berhasil logout");
};
