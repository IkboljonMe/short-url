import { urlData } from "../../src/types/url";
export type UrlState = {
  data: urlData | null;
};

export type UrlAction = {
  type: string;
  payload: urlData | null;
};
