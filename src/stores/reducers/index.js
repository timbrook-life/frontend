import { combineReducers } from "redux";
import podcasts from "./podcasts";
import admin from "./admin";

export default combineReducers({ podcasts, admin });
