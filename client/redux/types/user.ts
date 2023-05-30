import * as userActions from "./userActions";

export type UserState = {
  token: string | null;
  userId: string | null;
};
export type UserAction = SetAuthUserAction | ClearAuthUserAction;

type UserPayload = {
  token: string;
  userId: string;
};
type SetAuthUserAction = {
  type: typeof userActions.SET_AUTH_USER;
  payload: UserPayload;
};

type ClearAuthUserAction = {
  type: typeof userActions.CLEAR_AUTH_USER;
};
