import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard(state, action) {
      return { ...state, cards: [...state.cards, action.payload] };
    },
    setCardInitial(state) {
      return { ...state, cards: [] };
    },
  },
});

export const { addCard, setCardInitial } = cardSlice.actions;
export default cardSlice.reducer;
