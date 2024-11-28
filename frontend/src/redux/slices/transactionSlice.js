import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    addTransaction(state, action) {
      return {
        ...state,
        transactions: [...state.transactions, ...action.payload],
      };
    },
  },
});

export const { addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
