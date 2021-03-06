import { combineReducers } from "redux";
import user from "./user_reducers";
import theme from "./theme_reducer";

const rootReducer = combineReducers({
  user,
  theme
});

export default rootReducer;
