import { combineReducers } from "redux";
import { authReducer } from "./authreducer";
import { errorReducer } from "./errorReducer";
import { profileReducer } from "./profileReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
});
