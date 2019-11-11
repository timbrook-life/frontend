import { combineReducers } from "redux";
import podcasts from "./podcasts";
import admin from "./admin";
import appSettings from "./app_settings";

export default combineReducers({ podcasts, admin, appSettings });
