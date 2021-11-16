import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import cmsUserReducer from "./cmsUserReducer";
import loginReducer from "./loginReducers";
import userReducer from "./userReducer";

export default combineReducers({
  isLogin: loginReducer,
  Admin: adminReducer,
  CmsUsers: cmsUserReducer,
  Users: userReducer,
});
