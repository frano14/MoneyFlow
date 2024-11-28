import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import cardSlice from "./slices/cardSlice";
import transactionSlice from "./slices/transactionSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    card: cardSlice,
    transaction: transactionSlice,
  },
});

export default store;
