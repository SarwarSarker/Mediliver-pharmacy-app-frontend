import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";

// all products
export const getAllProduct = createAsyncThunk(
  "products/getAllProduct",
  async (_, { rejectWithValue }) => {
    try {
      return await productService.allProduct();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

// single product
export const singleProductById = createAsyncThunk(
  "products/getSingleProduct",
  async (id, { rejectWithValue }) => {
    try {
      return await productService.singleProduct(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

//upload product

//update product

//delete product

const initialState = {
  products: [],
  selectedProduct: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(singleProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(singleProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.selectedProduct = action.payload;
      })
      .addCase(singleProductById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default productSlice.reducer;
