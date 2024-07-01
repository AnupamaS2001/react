import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../api/fakestore";

const intialState = {
  status: "pending",
  products: [],
};

export const fetchProductsAsync = createAsyncThunk(
  "products/fetchProductsAsync",
  async () => {
    const response = await fetchProducts();
    return response;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: intialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.products = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state) => {
        state.status = "rejected";
      });
  },
});
export default productSlice.reducer;
