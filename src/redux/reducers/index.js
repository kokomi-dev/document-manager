import loginReduceres from "./LoginReducers";
// combineReducers in redux
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  login: loginReduceres,
});
export default rootReducers;
