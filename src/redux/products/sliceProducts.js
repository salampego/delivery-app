import { createSlice } from "@reduxjs/toolkit";
import { getProductById, getProductList } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const products = createSlice({
  name: "products",
  initialState: {
    items: [],
    restrauntById: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getProductList.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [getProductById.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.restrauntById = payload;
    },
    [getProductList.pending]: handlePending,
    [getProductList.rejected]: handleRejected,
  },
  [getProductById.pending]: handlePending,
  [getProductById.rejected]: handleRejected,
});

export const productsReducer = products.reducer;
