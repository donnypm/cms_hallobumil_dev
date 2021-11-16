import { combineReducers } from "redux";
import loginReducer from "./loginReducers";
import userReducer from "./userReducer";

export default combineReducers({
  isLogin: loginReducer,
  Users: userReducer,
});
