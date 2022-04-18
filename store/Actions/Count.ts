import { Dispatch } from "react";
import { Action } from "../ActionTypes/Count";

export const increment = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "INCREMENT",
    });
  };
};

export const decrement = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "DECREMENT",
    });
  };
};

export const fetchThis = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/5");
      const data = await res.json();

      dispatch({
        type: "FETCH_FULFILLED",
        payload: data.title,
      });
    } catch (e) {
      dispatch({
        type: "FETCH_REJECTED",
        payload: e.message,
      });
    }
  };
};
