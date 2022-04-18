import { configureStore } from "@reduxjs/toolkit";
import firstReducer from "./reducers/first";

const store = configureStore({
    reducer: {
        first: firstReducer
    }
})

export default store