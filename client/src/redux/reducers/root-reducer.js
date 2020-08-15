import { combineReducers } from "redux";
import { authReducer } from "./authreducer";
import { errorReducer } from "./errorReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
});
