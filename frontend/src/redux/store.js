import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import cardSlice from "./slices/cardSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    card: cardSlice,
  },
});

export default store;
