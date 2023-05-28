// Action types
export const SET_AUTH_USER = "SET_AUTH_USER";
export const CLEAR_AUTH_USER = "CLEAR_AUTH_USER";

// Define types for the payload
type AuthPayload = {
  token: string;
  userId: string;
};

// Define types for the actions
export type SetAuthUserAction = {
  type: typeof SET_AUTH_USER;
  payload: AuthPayload;
};

export type ClearAuthUserAction = {
  type: typeof CLEAR_AUTH_USER;
};
