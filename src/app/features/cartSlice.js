import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardProduct: [],
  totalAmount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {},
    increaseQuality: (state, { payload }) => {},
    decreaseQuality: (state, { payload }) => {},
    removeFromCart: (state, { payload }) => {
      state.cardProduct.filter((p) => p != payload);
    },
    resetCart: (state, { payload }) => {
      state.cardProduct = null;
    },
  },
});

export const {
  addToCart,
  decreaseQuality,
  increaseQuality,
  removeFromCart,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
