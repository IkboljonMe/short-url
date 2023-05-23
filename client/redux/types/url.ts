import { urlData } from "../../src/types/url";
export interface State {
  data: urlData | null;
}

export interface Action {
  type: string;
  payload: urlData | null;
}
