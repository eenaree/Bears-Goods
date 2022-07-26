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

interface CartState {
  items: GoodsOption[];
  checked: string[];
}

const initialState: CartState = {
  items: getLocalStorage('cart', checkCart) || [],
  checked: [],
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<GoodsOption[]>) => {
      state.items = state.items
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
    removeCartItem: (
      state,
      action: PayloadAction<{
        id: GoodsOption['id'];
        size: GoodsOption['size'];
      }>
    ) => {
      state.items = state.items.filter(
        item =>
          !(item.id === action.payload.id && item.size === action.payload.size)
      );
    },
    incrementItemQuantity: (
      state,
      action: PayloadAction<{
        id: GoodsOption['id'];
        size: GoodsOption['size'];
      }>
    ) => {
      const item = state.items.find(
        item =>
          item.id === action.payload.id && item.size === action.payload.size
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decrementItemQuantity: (
      state,
      action: PayloadAction<{
        id: GoodsOption['id'];
        size: GoodsOption['size'];
      }>
    ) => {
      const item = state.items.find(
        item =>
          item.id === action.payload.id && item.size === action.payload.size
      );
      if (item) {
        item.quantity -= 1;
      }
    },
    changeItemQuantity: (
      state,
      action: PayloadAction<{
        id: GoodsOption['id'];
        size: GoodsOption['size'];
        quantity: GoodsOption['quantity'];
      }>
    ) => {
      const item = state.items.find(
        item =>
          item.id === action.payload.id && item.size === action.payload.size
      );
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    toggleItemChecked: (state, action: PayloadAction<string>) => {
      const itemIndex = state.checked.indexOf(action.payload);
      if (itemIndex !== -1) {
        state.checked.splice(itemIndex, 1);
      } else {
        state.checked.push(action.payload);
      }
    },
  },
});

export default cartSlice.reducer;

export const {
  addCartItem,
  removeCartItem,
  incrementItemQuantity,
  decrementItemQuantity,
  changeItemQuantity,
  toggleItemChecked,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.items;

export const selectCartItem = (
  state: RootState,
  id: GoodsOption['id'],
  size: GoodsOption['size']
) =>
  state.cart.items.find(
    cartItem => cartItem.id === id && cartItem.size === size
  );

export const selectCartItemChecked = (state: RootState, itemIndex: string) =>
  state.cart.checked.includes(itemIndex);

export const selectCartItemCount = createSelector(
  selectCart,
  cart => cart.length
);
