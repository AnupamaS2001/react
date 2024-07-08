import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStoreProduct,postStoreProduct  } from "../api/getStoreProduct";

const intialState = {
  status: "pending",
  products: [],  
  error: null,
};

export const myStoreProduct = createAsyncThunk(
  "getproducts",
  async () => {
    const response = await getStoreProduct();
    return response;
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async ({ productData, successCb, errorCb }, { rejectWithValue }) => {
    return postStoreProduct(productData)
      .then(response => {
        if (successCb) successCb(response);
        return response;
      })
      .catch(error => {
        if (errorCb) errorCb(error);
        return rejectWithValue(error.response?.data?.message || error.message);
      });
  }
);

const myStoreProductSlice = createSlice({
  name: "products",
  initialState: intialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(myStoreProduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(myStoreProduct.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.products = action.payload;
      })
      .addCase(myStoreProduct.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(addProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default myStoreProductSlice.reducer;
