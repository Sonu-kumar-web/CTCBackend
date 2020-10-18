import { combineReducers } from "redux";

import alert from "./alert";
import auth from "./auth";
import profile from "./profile";

// Pass your all Reducers
export default combineReducers({ alert, auth, profile });
