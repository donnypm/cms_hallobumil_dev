import { combineReducers } from "redux";
import loginReducer from "./loginReducers";

export default combineReducers({
  isLogin: loginReducer,
});