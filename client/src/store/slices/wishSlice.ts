import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getLocalStorage } from '@lib/utils';
import { RootState } from '@store/store';
import { GoodsCategory, GoodsData } from '@typings/db';

type Filter = GoodsCategory | 'all';

interface WishState {
  items: GoodsData[];
  wishId: number[];
  filter: Filter;
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

const wishStorage = getLocalStorage('wishlist', checkWishList);

const wishStorageId = wishStorage?.map(item => item.id);

const initialState: WishState = {
  items: wishStorage || [],
  wishId: wishStorageId || [],
  filter: 'all',
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
    changeWishFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
  },
});

export const wishReducer = wishSlice.reducer;

export const { addWishItem, removeWishItem, changeWishFilter } =
  wishSlice.actions;

export const selectIsWishItem = (state: RootState, id: number) =>
  state.wish.wishId.includes(id);

export const selectWishItems = (state: RootState) => state.wish.items;

export const selectWishItem = (state: RootState, id: number) =>
  state.wish.items.find(item => item.id === id);

export const selectWishItemCount = (state: RootState) =>
  state.wish.items.length;

export const selectWishFilterList = (state: RootState) =>
  state.wish.items.reduce<[Filter, number][]>((prev, curr) => {
    for (const filter of prev) {
      if (filter[0] === curr.category) {
        filter[1]++;
        return prev;
      }
    }

    prev.push([curr.category, 1]);
    return prev;
  }, []);

export const selectWishFilter = (state: RootState) => state.wish.filter;
