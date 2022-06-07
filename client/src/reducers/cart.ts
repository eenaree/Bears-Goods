import { CartItemOption } from '@typings/db';

export interface CartState {
  cart: CartItemOption[];
}

export type CartAction =
  | { type: 'ADD_CART_ITEM'; items: CartItemOption[] }
  | { type: 'REMOVE_CART_ITEM'; item: CartItemOption }
  | {
      type: 'CHANGE_CART_ITEM_QUANTITY';
      item: CartItemOption;
      quantity: number;
    }
  | { type: 'TOGGLE_ALL_SELECT'; selected: boolean }
  | { type: 'TOGGLE_ITEM_SELECT'; item: CartItemOption }
  | { type: 'REMOVE_SELECTED_CART_ITEM' };

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_CART_ITEM':
      return {
        ...state,
        cart: state.cart
          .concat(action.items)
          .reduce<CartItemOption[]>((prev, curr) => {
            const sameOptionIndex = prev.findIndex(
              prev => prev.name === curr.name && prev.size === curr.size
            );

            if (sameOptionIndex !== -1) {
              prev[sameOptionIndex] = {
                ...prev[sameOptionIndex],
                quantity: prev[sameOptionIndex].quantity + curr.quantity,
              };
            }

            return sameOptionIndex !== -1 ? prev : prev.concat(curr);
          }, []),
      };
    case 'REMOVE_CART_ITEM':
      return {
        ...state,
        cart: state.cart.filter(
          item =>
            item.name !== action.item.name || item.size !== action.item.size
        ),
      };
    case 'CHANGE_CART_ITEM_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.name === action.item.name && item.size === action.item.size
            ? { ...action.item, quantity: action.quantity }
            : item
        ),
      };
    case 'TOGGLE_ALL_SELECT':
      return {
        ...state,
        cart: state.cart.map(item => ({ ...item, selected: action.selected })),
      };
    case 'TOGGLE_ITEM_SELECT':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.name === action.item.name && item.size === action.item.size
            ? { ...item, selected: !item.selected }
            : item
        ),
      };
    case 'REMOVE_SELECTED_CART_ITEM':
      return {
        ...state,
        cart: state.cart.filter(item => !item.selected),
      };
  }
}
