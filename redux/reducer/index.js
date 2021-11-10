import { combineReducers } from "redux";
import AdminReducer from "./AdminReducer";
import cartReducer from "./cartReducers";
import userReducer from "./userReducers";

export default combineReducers({
  CmsAdmin: AdminReducer,
});
