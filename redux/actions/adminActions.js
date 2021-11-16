import { DELETE_ADMIN, GET_ADMIN, ADMIN_ERROR } from "../reducers/types";
import axios from "axios";

export const getAdmin = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/users`);
    dispatch({
      type: GET_ADMIN,
      payload: res.data,
    });
    console.log(res.data);
  } catch (error) {
    dispatch({
      type: ADMIN_ERROR,
      payload: error,
    });
  }
};

export const deleteAdmin = (id) => async (dispatch) => {
  try {
    await axios
      .delete(`https://fakestoreapi.com/users/${id}`)
      .then((response) => {
        dispatch({
          type: DELETE_ADMIN,
          payload: response.data,
        });
        console.log(response);
      });
  } catch (error) {
    dispatch({
      type: ADMIN_ERROR,
      payload: error,
    });
  }
};
