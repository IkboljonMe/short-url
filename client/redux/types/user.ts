import { urlData } from "../../src/types/url";
import * as userActions from "./userActions";

export type UserState = {
  token: string | null;
  userId: string | null;
  urls: urlData[] | null;
};
export type UserAction = SetAuthUserAction | ClearAuthUserAction | SetUserUrlsAction;

type UserPayload = {
  token?: string;
  userId?: string;
  urls?: urlData[];
};
type SetAuthUserAction = {
  type: typeof userActions.SET_AUTH_USER;
  payload: UserPayload;
};
type SetUserUrlsAction = {
  type: typeof userActions.SET_USER_URL;
  payload: UserPayload;
};

type ClearAuthUserAction = {
  type: typeof userActions.CLEAR_AUTH_USER;
};
