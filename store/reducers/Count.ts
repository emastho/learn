import { Action } from "../ActionTypes/Count";

export type initState = {
  count: number;
  title: string;
};

const init: initState = {
  count: 0,
  title: "no title",
};

export default (state = init, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "FETCH_FULFILLED":
      return { ...state, title: action.payload };

    case "FETCH_REJECTED":
      return { ...state, title: action.payload };

    default:
      return state;
  }
};
