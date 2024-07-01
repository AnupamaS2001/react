import { configureStore } from '@reduxjs/toolkit'
import productsReducer, { fetchProductsAsync } from './product'

export const store = configureStore({
  reducer: {
    products:productsReducer
   
  },
});

store.dispatch(fetchProductsAsync());