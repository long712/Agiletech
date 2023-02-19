// import { createSlice } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getTags, loginThunk } from "./funtion";

const initialState = {
  data: [],
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        toast.success("login success", { autoClose: 1000 });
        console.log(action.payload);
        localStorage.setItem("tokenLogin", action.payload.data.accessToken);
        return action.payload;
      })
      .addCase(loginThunk.rejected, () => {
        toast.error("login fail", { autoClose: 1000 });
      })

      .addCase(getTags.fulfilled, (state, action) => {
        toast.success("get data success", { autoClose: 1000 });
        console.log(action.payload);
        return action.payload;
      })
      .addCase(getTags.rejected, () => {
        toast.error("get data fail", { autoClose: 1000 });
      });
  },
});

export default profileSlice.reducer;
