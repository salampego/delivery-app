import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://shop-kl2m.onrender.com";

export const getProductList = createAsyncThunk(
  "products/getList",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/products");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (restrauntId, thunkAPI) => {
    try {
      const response = await axios.get(`/api/products/${restrauntId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
