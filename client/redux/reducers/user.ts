import * as userActions from "../types/userActions";

import { UserState, UserAction } from "../types/user";
import { urlData } from "../../src/types/url";
export const setUser = (token: string, userId: string) => ({
  type: userActions.SET_AUTH_USER,
  payload: { token, userId },
});

export const clearUser = () => ({
  type: userActions.CLEAR_AUTH_USER,
});
export const setUserUrls = (urls: urlData[]) => ({
  type: userActions.SET_USER_URL,
  payload: { urls },
});
const AUTH_TOKEN = localStorage.getItem("AUTH_TOKEN");
const USER_ID = localStorage.getItem("USER_ID");
const initialState: UserState = {
  token: AUTH_TOKEN || null,
  userId: USER_ID || null,
  urls: null,
};

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case userActions.SET_AUTH_USER:
      return {
        token: action.payload.token,
        userId: action.payload.userId,
      };
    case userActions.SET_USER_URL:
      return {
        ...state,
        urls: action.payload.urls,
      };
    case userActions.CLEAR_AUTH_USER:
      localStorage.removeItem("AUTH_TOKEN");
      localStorage.removeItem("USER_ID");
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
