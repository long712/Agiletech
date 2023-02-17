import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../api";

export const loginThunk = createAsyncThunk("login", async (username) => {
  const response = await instance.post("/auth/login", username);
  return response;
});

export const getTags = createAsyncThunk("getTags", async () => {
  const response = await instance.get("posts/tags");
  return response.data;
});
