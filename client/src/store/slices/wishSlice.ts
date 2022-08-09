import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage } from '@lib/utils';
import { RootState } from '@store/store';
import { GoodsData } from '@typings/db';

interface WishState {
  items: GoodsData[];
  wishId: number[];
}

const checkWishList = (value: any): value is GoodsData[] => {
  if (Array.isArray(value)) {
    const isWishList = value.every(value => {
      if (
        'id' in value &&
        'name' in value &&
        'price' in value &&
        'img' in value &&
        'size' in value &&
        'category' in value
      ) {
        return true;
      }
      return false;
    });

    if (isWishList) return true;

    return false;
  }

  return false;
};

const initialState: WishState = {
  items: getLocalStorage('wishlist', checkWishList) || [],
  wishId: [],
};

const wishSlice = createSlice({
  name: 'wishSlice',
  initialState,
  reducers: {
    addWishItem: (state, action: PayloadAction<GoodsData>) => {
      state.items.push(action.payload);
      state.wishId.push(action.payload.id);
    },
    removeWishItem: (state, action: PayloadAction<number>) => {
      const filteredItems = state.items.filter(
        item => item.id !== action.payload
      );
      const wishIndex = state.wishId.indexOf(action.payload);
      if (wishIndex !== -1) {
        state.wishId.splice(wishIndex, 1);
      }

      state.items = filteredItems;
    },
  },
});

export const wishReducer = wishSlice.reducer;

export const { addWishItem, removeWishItem } = wishSlice.actions;

export const selectIsWishItem = (state: RootState, id: number) =>
  state.wish.wishId.includes(id);
