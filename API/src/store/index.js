import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './product'
import myStoreReducer from './myStoreGet'

export const store = configureStore({
  reducer: {
    products:productsReducer,
    myStoreProducts : myStoreReducer,
    
   
  },
});

