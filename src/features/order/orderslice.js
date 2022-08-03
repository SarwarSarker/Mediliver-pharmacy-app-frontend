import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderService from "./orderService";

export const createNewOrder = createAsyncThunk(
  "order/createNewOrder",
  async (orderData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await orderService.createOrder(orderData, token);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  message: "",
  orders: [],
  loading: false,
  order: {},
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createNewOrder.fulfilled, (state, action) => {
      state.order = action.payload;
      console.log(action.payload);
    });
  },
});

export default orderSlice.reducer;
