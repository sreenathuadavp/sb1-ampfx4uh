import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import servicesReducer from './servicesSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    services: servicesReducer,
  },
});