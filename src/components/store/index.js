import { configureStore } from "@reduxjs/toolkit";
import data from "./slice.js";

export const store = configureStore({
  reducer: { data: data },
});
