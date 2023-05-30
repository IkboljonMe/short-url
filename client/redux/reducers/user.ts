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
const initialState: UserState = {
  token: null,
  userId: null,
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
        urls: action.payload.urls,
      };
    case userActions.CLEAR_AUTH_USER:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
