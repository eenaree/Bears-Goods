import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage } from '@lib/utils';
import { RootState } from '@store/store';
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
  reducers: {
    addCartItem: (state, action: PayloadAction<GoodsOption[]>) => {
      return state
        .concat(action.payload)
        .reduce<GoodsOption[]>((prev, curr) => {
          const duplicateIndex = prev.findIndex(
            prev => prev.name === curr.name && prev.size === curr.size
          );

          if (duplicateIndex !== -1) {
            prev[duplicateIndex] = {
              ...prev[duplicateIndex],
              quantity: prev[duplicateIndex].quantity + curr.quantity,
            };
            return prev;
          }

          return prev.concat(curr);
        }, []);
    },
  },
});

export default cartSlice.reducer;

export const { addCartItem } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export const selectCartItem = (
  state: RootState,
  id: GoodsOption['id'],
  size: GoodsOption['size']
) => state.cart.find(cartItem => cartItem.id === id && cartItem.size === size);

export const selectCartItemCount = createSelector(
  selectCart,
  cart => cart.length
);
