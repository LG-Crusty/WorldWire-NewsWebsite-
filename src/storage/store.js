import { configureStore } from "@reduxjs/toolkit";
import newsReducer from  "../features/newsWeb/newsSlice"

export const store = configureStore({
  reducer: newsReducer,
});
