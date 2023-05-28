import { SET_AUTH_USER, CLEAR_AUTH_USER, SetAuthUserAction, ClearAuthUserAction } from "../types/user";

type AuthActionTypes = SetAuthUserAction | ClearAuthUserAction;

// Action creators
export const setAuthUser = (token: string, userId: string): SetAuthUserAction => ({
  type: SET_AUTH_USER,
  payload: { token, userId },
});

export const clearAuthUser = (): ClearAuthUserAction => ({
  type: CLEAR_AUTH_USER,
});

// Reducer
type AuthState = {
  token: string | null;
  userId: string | null;
};

const initialState: AuthState = {
  token: null,
  userId: null,
};

const userReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        token: action.payload.token,
        userId: action.payload.userId,
      };
    case CLEAR_AUTH_USER:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
