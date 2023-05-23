import { State, Action } from "../types/url";
const initialState: State = {
  data: null,
};
const urlReducer = (state = initialState, action: Action) => {
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
