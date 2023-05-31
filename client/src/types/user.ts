import { urlData } from "./url";

export type userData = {
  id?: number;
  email?: string;
  username?: string;
  urls?: urlData[];
  date?: number;
};
export interface AxiosResponseUser {
  data: userData;
}
