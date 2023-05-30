import { UrlState, UrlAction } from "../types/url";
const initialState: UrlState = {
  data: null,
};
const urlReducer = (state = initialState, action: UrlAction) => {
  switch (action.type) {
    case "SET_URL":
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};
export default urlReducer;
