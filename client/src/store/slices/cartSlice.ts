import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '@lib/utils';
import { GoodsOption } from '@typings/db';

const checkCart = (value: any): value is GoodsOption[] => {
  if (Array.isArray(value)) {
    value.forEach(value => {
      if (
        typeof value === 'object' &&
        'id' in value &&
        'name' in value &&
        'price' in value &&
        'img' in value &&
        'size' in value &&
        'category' in value
      ) {
        return true;
      }
    });
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
