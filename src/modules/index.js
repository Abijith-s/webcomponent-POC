import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import user from "./userReducer";

const createRootReducer = (history) =>
  combineReducers({
    user,
    router: connectRouter(history),
  });

export default createRootReducer;