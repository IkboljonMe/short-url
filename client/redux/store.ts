import { configureStore } from "@reduxjs/toolkit";
import urlReducer from "./reducers/url";

const store = configureStore({
  reducer: urlReducer,
});

export default store;
