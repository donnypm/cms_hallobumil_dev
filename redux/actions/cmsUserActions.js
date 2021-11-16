import { DELETE_CMSUSERS, GET_CMSUSERS, CMSUSERS_ERROR } from "../reducers/types";
import axios from "axios";

export const getCmsuser = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/users`);
    dispatch({
      type: GET_CMSUSERS,
      payload: res.data,
    });
    console.log(res.data);
  } catch (error) {
    dispatch({
      type: CMSUSERS_ERROR,
      payload: error,
    });
  }
};

export const deleteCmsuser = (id) => async (dispatch) => {
  try {
    await axios
      .delete(`https://fakestoreapi.com/users/${id}`)
      .then((response) => {
        dispatch({
          type: DELETE_CMSUSERS,
          payload: response.data,
        });
        console.log(response);
      });
  } catch (error) {
    dispatch({
      type: CMSUSERS_ERROR,
      payload: error,
    });
  }
};
