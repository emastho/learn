import { combineReducers } from "redux";
import CountReducer from "./Count";

export const reducers = combineReducers({
  CountReducer,
});

export type RootState = ReturnType<typeof reducers>;
