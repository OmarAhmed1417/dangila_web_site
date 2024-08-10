import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Cards/cartSlice ';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
