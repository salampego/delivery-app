import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://shop-kl2m.onrender.com";

export const createOrder = createAsyncThunk(
  "basket/createOrder",
  async (order, thunkAPI) => {
    try {
      const response = await axios.post("/api/order", { ...order });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const findOrder = createAsyncThunk(
  "basket/findOrder",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/api/order/findOrder", { ...data });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
