import * as userActions from "../types/userActions";

import { UserState, UserAction } from "../types/user";
export const setAuthUser = (token: string, userId: string) => ({
  type: userActions.SET_AUTH_USER,
  payload: { token, userId },
});

export const clearAuthUser = () => ({
  type: userActions.CLEAR_AUTH_USER,
});
const initialState: UserState = {
  token: null,
  userId: null,
};

const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case userActions.SET_AUTH_USER:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    case userActions.CLEAR_AUTH_USER:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;