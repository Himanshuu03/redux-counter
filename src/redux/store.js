import { configureStore } from "@reduxjs/toolkit";
import { counteSlice } from "./slice/counterSlice";

export const store = configureStore({
    reducer:{
        counter:counteSlice.reducer,
    }
})