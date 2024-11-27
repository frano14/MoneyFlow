/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  firstname: "",
  lastname: "",
  mail: "",
  cardsamount: 0,
  cashamount: 0,
  total: 0,
  role: "user",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      return { ...state, ...action.payload };
    },

    setUserInitial(state) {
      return { ...state, ...initialState };
    },
  },
});

export const { setUser, setUserInitial } = userSlice.actions;
export default userSlice.reducer;
