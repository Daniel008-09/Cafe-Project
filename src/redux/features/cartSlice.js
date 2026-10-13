
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: [],

  reducers: {

    addToCart: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.find((item) => {
        return (
          item.id === newItem.id &&
          item.sizeId === newItem.sizeId
        );
      });

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.push(newItem);
      }
    },

    removeFromCart: (state, action) => {
      const item = state.find(
        (item) =>
          item.id === action.payload.id &&
          item.sizeId === action.payload.sizeId
      );

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        return state.filter(
          (item) =>
            !(
              item.id === action.payload.id &&
              item.sizeId === action.payload.sizeId
            )
        );
      }
    },


    decrementFromCart: (state, action) => {
      const item = state.find(
        (item) =>
          item.id === action.payload.id &&
          item.sizeId === action.payload.sizeId
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    encrementFromCart: (state, action) => {
      const item = state.find(
        (item) =>
          item.id === action.payload.id &&
          item.sizeId === action.payload.sizeId
      );

      if (item) {
        item.quantity += 1;
      }
    },

  },
});
export const { addToCart, removeFromCart, encrementFromCart, decrementFromCart } = cartSlice.actions;

export default cartSlice.reducer;
