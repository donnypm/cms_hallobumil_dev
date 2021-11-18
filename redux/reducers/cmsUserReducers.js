import { DELETE_CMSUSERS, GET_CMSUSERS, CMSUSERS_ERROR } from "./types";

const initialState = {
  cmsUsers: [],
  cms_user: {},
  loading: true,
};

export default function cmsUserReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CMSUSERS:
      return {
        ...state,
        cmsUsers: action.payload,
        loading: false,
      };

    case DELETE_CMSUSERS:
      const filteredState = state.cmsUsers.filter(
        (cms_user) => Number(cms_user.id) !== Number(action.payload.id)
      );
      return { ...state, cmsUsers: filteredState };

    case CMSUSERS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
