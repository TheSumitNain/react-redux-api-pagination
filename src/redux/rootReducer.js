import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
};

const counterSlice = createSlice({
  name: "shopper",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },

    plusQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity++;
      }
    },

    minusQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );
      if (item?.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },

    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
  },
});

export const { minusQuantity, plusQuantity, deleteItem, addToCart, resetCart } =
  counterSlice.actions;

export default counterSlice.reducer;
