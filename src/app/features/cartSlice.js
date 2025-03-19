import { createSlice } from "@reduxjs/toolkit";
import desserts from "../../data";

const initialState = {
  desserts: [...desserts],
  totalPrice: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      cartSlice.caseReducers.calculateTotal(state);
      const item = [...state.desserts].find((d) => d.id == payload);
      item.amount = 1;
    },
    increaseQuality: (state, { payload }) => {
      cartSlice.caseReducers.calculateTotal(state);
      const item = [...state.desserts].find((d) => d.id == payload);
      item.amount += 1;
    },
    decreaseQuality: (state, { payload }) => {
      cartSlice.caseReducers.calculateTotal(state);
      const item = [...state.desserts].find((d) => d.id == payload);
      item.amount -= 1;
    },
    removeFromCart: (state, { payload }) => {
      cartSlice.caseReducers.calculateTotal(state);
      const item = [...state.desserts].find((d) => d.id == payload);
      item.amount = 0;
    },
    resetCart: (state, { payload }) => {
      state.desserts = null;
    },
    calculateTotal: (state) => {
      let allPrice = 1;
      let allAmount = 1;

      state.desserts.forEach((d) => {
        allPrice += d.amount * d.price;
        allAmount += d.amount;
      });
      state.totalAmount = allAmount;
      state.totalPrice = allPrice;
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
