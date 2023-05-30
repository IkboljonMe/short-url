import { configureStore, combineReducers } from "@reduxjs/toolkit";
import urlReducer from "./reducers/url";
import userReducer from "./reducers/user";
import { UserState } from "./types/user";
import { UrlState } from "./types/url";
const rootReducer = combineReducers({
  user: userReducer,
  url: urlReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export interface RootState {
  user: UserState;
  url: UrlState;
}

export default store;
