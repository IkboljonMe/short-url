import * as userActions from "../types/userActions";

import { UserState, UserAction } from "../types/user";
import { urlData } from "../../src/types/url";
import { userData } from "../../src/types/user";
export const setUser = (data: userData) => ({
  type: userActions.SET_USER,
  payload: { data },
});
export const clearUser = () => ({
  type: userActions.CLEAR_USER,
});
export const updateUserUrls = (urls: urlData[]) => ({
  type: userActions.UPDATE_USER_URLS,
  payload: { urls },
});
const jsonUserData: string | null = localStorage.getItem("USER");
let USER: userData | null = null;
if (jsonUserData) {
  USER = JSON.parse(jsonUserData);
}
const initialState: UserState = {
  token: USER?.token || null,
  userId: USER?.userId || null,
  email: USER?.email || null,
  username: USER?.username || null,
  urls: USER?.urls || null,
  date: USER?.date || null,
};

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case userActions.SET_USER:
      return {
        token: action.payload.data.token,
        userId: action.payload.data.userId,
        email: action.payload.data.email,
        username: action.payload.data.username,
        urls: action.payload.data.urls,
        date: action.payload.data.date,
      };
    case userActions.UPDATE_USER_URLS:
      return {
        ...state,
        urls: action.payload.urls,
      };
    case userActions.CLEAR_USER:
      localStorage.removeItem("USER");
      return {
        token: null,
        userId: null,
        email: null,
        username: null,
        urls: null,
        date: null,
      };
    default:
      return state;
  }
};

export default userReducer;
