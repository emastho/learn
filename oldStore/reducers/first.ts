import { createReducer } from "@reduxjs/toolkit";
import { first, second } from "../actions/first";

const init = {
  first: 0,
};

const firstReducer = createReducer(init, (builder) => {
  builder
    .addCase(first, (state, action) => {
      state.first += 1;
    })
    .addCase(second, (state, action) => {
      state.first -= 1;
    });
});

export default firstReducer