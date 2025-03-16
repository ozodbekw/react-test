import { createSlice } from "@reduxjs/toolkit";
import desserts from "../../data";
const initialState = {
  desserts,
  selectedDesserts: [],
  totalPrice: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      cartSlice.caseReducers.calculateTotal(state);
      state.selectedDesserts = [...state.selectedDesserts, payload];
    },
    increaseQuality: (state, { payload }) => {
      cartSlice.caseReducers.calculateTotal(state);
    },
    decreaseQuality: (state, { payload }) => {
      cartSlice.caseReducers.calculateTotal(state);
    },
    removeFromCart: (state, { payload }) => {
      cartSlice.caseReducers.calculateTotal(state);
      state.desserts.filter((p) => p != payload);
    },
    resetCart: (state, { payload }) => {
      state.desserts = null;
    },
    calculateTotal: (state) => {
      let allPrice = 1;
      let allAmount = 1;

      state.selectedDesserts.forEach((d) => {
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
