import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './slices/cartSlice';
import { wishReducer } from './slices/wishSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wish: wishReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
