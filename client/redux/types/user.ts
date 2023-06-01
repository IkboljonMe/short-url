import { urlData } from "../../src/types/url";
import * as userActions from "./userActions";

export type UserState = {
  userId: number | null;
  token: string | null;
  username: string | null;
  email: string | null;
  date: number | null;
  urls: urlData[] | null;
};
export type UserAction = SetUserAction | ClearUserAction | SetUserUrlsAction;

type UserPayload = {
  data: UserState;
};
type SetUserAction = {
  type: typeof userActions.SET_USER;
  payload: UserPayload;
};
type SetUserUrlsAction = {
  type: typeof userActions.UPDATE_USER_URLS;
  payload: {
    urls: urlData[] | null;
  };
};

type ClearUserAction = {
  type: typeof userActions.CLEAR_USER;
};
