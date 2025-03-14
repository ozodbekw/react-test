import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardProduct: [],
  totalAmount: 0,
  totalPrice: 0,
  orderList: false,
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
    showOrderList: (state, { payload }) => {
      state.orderList === true;
    },
    closeOrderList: (state, { payload }) => {
      state.orderList === false;
    },
  },
});

export const {
  addToCart,
  decreaseQuality,
  increaseQuality,
  removeFromCart,
  resetCart,
  showOrderList,
  closeOrderList,
} = cartSlice.actions;
export default cartSlice.reducer;
