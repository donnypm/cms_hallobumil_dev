import { LOGIN, LOGOUT, ERROR } from "./types";

const initialState = {
  users: null,
  loading: true,
  roleAccess: "Admin",
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        users: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        users: null,
      };

    case ERROR:
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
