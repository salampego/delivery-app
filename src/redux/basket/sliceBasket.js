import { createSlice } from "@reduxjs/toolkit";
import { createOrder, findOrder } from "./operations";

export const basketSlice = createSlice({
  name: "basket",
  initialState: { items: [], error: false },
  isLoading: false,
  reducers: {
    addToBasket(state, { payload }) {
      const existingItem = state.items.find((item) => item._id === payload._id);

      if (!existingItem) {
        state.items.push(payload);
      }
    },
    increaseQuantity(state, { payload }) {
      const existingItem = state.items.find((item) => item._id === payload);
      if (existingItem && existingItem.quantity < 20) {
        if (!existingItem.initialPrice) {
          existingItem.initialPrice = existingItem.price;
        }
        const updatedQuantity = existingItem.quantity + 1;
        existingItem.quantity = updatedQuantity;
        existingItem.price = existingItem.initialPrice * updatedQuantity;
      }
    },
    decreaseQuantity(state, { payload }) {
      const existingItem = state.items.find((item) => item._id === payload);
      if (existingItem && existingItem.quantity > 1) {
        if (!existingItem.initialPrice) {
          existingItem.initialPrice = existingItem.price;
        }
        const updatedQuantity = existingItem.quantity - 1;
        existingItem.quantity = updatedQuantity;
        existingItem.price = existingItem.initialPrice * updatedQuantity;
      }
    },

    removeOrderById(state, { payload }) {
      state.items = state.items.filter((item) => item._id !== payload);
    },
    removeOrder(state) {
      state.items.splice(0, state.items.length);
    },
  },
  extraReducers: {
    [createOrder.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = false;
      state.order = payload.order;
    },
    [createOrder.rejected](state, { error }) {
      state.isLoading = false;
      state.error = true;
      console.error(error);
    },
    [createOrder.pending](state) {
      state.isLoading = true;
      state.error = false;
    },
    [findOrder.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.data = payload;
    },
    [findOrder.rejected](state) {
      state.isLoading = false;
    },
    [findOrder.pending](state) {
      state.isLoading = true;
    },
  },
});

export const {
  addToBasket,
  increaseQuantity,
  decreaseQuantity,
  removeOrderById,
  removeOrder,
} = basketSlice.actions;
