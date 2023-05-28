import { configureStore, combineReducers } from "@reduxjs/toolkit";
import urlReducer from "./reducers/url";
import userReducer from "./reducers/user";
const rootReducer = combineReducers({
  user: userReducer,
  url: urlReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
