import { combineReducers } from "redux";
import favorites from "./favorites";
import search from "./search";
import degree from "./degree";
import date from "./date";
export * from "./favorites";
export * from "./search";
export * from "./degree";
export * from "./date";
export default combineReducers({ favorites, search, degree, date });
