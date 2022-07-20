import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '@lib/utils';
import { GoodsOption } from '@typings/db';

const checkCart = (value: any): value is GoodsOption[] => {
  if (Array.isArray(value)) {
    const isCart = value.every(value => {
      if (
        typeof value === 'object' &&
        'id' in value &&
        'name' in value &&
        'price' in value &&
        'img' in value &&
        'size' in value &&
        'quantity' in value
      ) {
        return true;
      }
      return false;
    });

    if (isCart) return true;

    return false;
  }

  return false;
};

const initialState = getLocalStorage('cart', checkCart) || [];

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
