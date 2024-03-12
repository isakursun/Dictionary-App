import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "./WordSlice";

export const store =  configureStore({
  reducer: wordReducer,
});

