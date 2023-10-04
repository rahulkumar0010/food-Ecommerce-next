import { postItemType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProductState = {
  value: number;
  cart: postItemType[];
};

const initialState = {
  value: 0,
  cart: [],
} as ProductState;

export const products = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
    addToCart: (state, action: PayloadAction<postItemType>) => {
      let item = state.cart.find((arrow) => arrow.id === action.payload.id);
      if (item) {
        item.count === undefined ? (item.count = 1) : (item.count += 1);
        item.totalPrice === undefined
          ? (item.totalPrice = item.price)
          : (item.totalPrice += item.price);
      } else {
        state.cart.push({
          ...action.payload,
          count: 1,
          totalPrice: action.payload.price,
        });
      }
    },
    removeToCart: (state, action: PayloadAction<number>) => {
      if (state.cart.findIndex((arrow) => arrow.id === action.payload) !== -1) {
        state.cart.splice(
          state.cart.findIndex((arrow) => arrow.id === action.payload),
          1
        );
      }
    },
    removeCartCount: (state, action: PayloadAction<number>) => {
      let item = state.cart.find((arrow) => arrow.id === action.payload);
      if (item && item.count && item.count > 1) {
        item.count === undefined ? (item.count = 1) : (item.count -= 1);
        item.totalPrice === undefined
          ? (item.totalPrice = item.price)
          : (item.totalPrice -= item.price);
      } else {
        if (
          state.cart.findIndex((arrow) => arrow.id === action.payload) !== -1
        ) {
          state.cart.splice(
            state.cart.findIndex((arrow) => arrow.id === action.payload),
            1
          );
        }
      }
    },
  },
});

export const {
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
  reset,
  addToCart,
  removeToCart,
  removeCartCount
} = products.actions;
export default products.reducer;
