import { urlData } from "./url";

export type userData = {
  userId: number | null;
  token: string | null;
  username: string | null;
  email: string | null;
  date: number | null;
  urls: urlData[] | null;
};
export interface AxiosResponseUser {
  data: userData;
}
