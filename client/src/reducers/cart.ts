import { CartItemOption } from '@typings/db';

export interface CartState {
  cart: CartItemOption[];
  cartTotalPrice: number;
  allSelected: boolean;
}

export type CartAction =
  | { type: 'ADD_CART_ITEM'; items: CartItemOption[] }
  | { type: 'REMOVE_CART_ITEM'; item: CartItemOption }
  | {
      type: 'CHANGE_CART_ITEM_QUANTITY';
      item: CartItemOption;
      quantity: number;
    }
  | { type: 'RESET_CART' }
  | { type: 'TOGGLE_ALL_SELECT' }
  | { type: 'TOGGLE_ITEM_SELECT'; item: CartItemOption };

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
        cartTotalPrice:
          state.cartTotalPrice +
          action.items
            .map(item => item.price * item.quantity)
            .reduce((prev, curr) => prev + curr, 0),
        allSelected: state.cart.every(item => item.selected),
      };
    case 'REMOVE_CART_ITEM':
      return {
        ...state,
        cart: state.cart.filter(
          item =>
            item.name !== action.item.name || item.size !== action.item.size
        ),
        cartTotalPrice: state.cart
          .filter(
            item =>
              item.name !== action.item.name || item.size !== action.item.size
          )
          .reduce(
            (prev, curr) =>
              curr.selected ? prev + curr.price * curr.quantity : prev,
            0
          ),
        allSelected:
          state.cart.length - 1 > 0
            ? state.cart
                .filter(
                  item =>
                    item.name !== action.item.name ||
                    item.size !== action.item.size
                )
                .every(item => item.selected)
            : false,
      };
    case 'RESET_CART':
      return {
        ...state,
        cart: [],
        cartTotalPrice: 0,
        allSelected: false,
      };
    case 'CHANGE_CART_ITEM_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.name === action.item.name && item.size === action.item.size
            ? { ...action.item, quantity: action.quantity }
            : item
        ),
        cartTotalPrice: state.cart.reduce((prev, curr) => {
          if (
            curr.name === action.item.name &&
            curr.size === action.item.size
          ) {
            return curr.selected ? prev + curr.price * action.quantity : prev;
          } else {
            return curr.selected ? prev + curr.price * curr.quantity : prev;
          }
        }, 0),
      };
    case 'TOGGLE_ALL_SELECT':
      return {
        ...state,
        cart: state.allSelected
          ? state.cart.map(item => ({ ...item, selected: false }))
          : state.cart.map(item => ({ ...item, selected: true })),
        cartTotalPrice: state.allSelected
          ? 0
          : state.cart.reduce((prev, curr) => {
              return prev + curr.price * curr.quantity;
            }, 0),
        allSelected: !state.allSelected,
      };
    case 'TOGGLE_ITEM_SELECT':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.name === action.item.name && item.size === action.item.size
            ? { ...item, selected: !item.selected }
            : item
        ),
        cartTotalPrice: state.cart.reduce((prev, curr) => {
          if (
            curr.name === action.item.name &&
            curr.size === action.item.size
          ) {
            return curr.selected ? prev : prev + curr.price * curr.quantity;
          } else {
            return curr.selected ? prev + curr.price * curr.quantity : prev;
          }
        }, 0),
        allSelected: state.cart.every(item =>
          item.name === action.item.name && item.size === action.item.size
            ? !item.selected
            : item.selected
        ),
      };
  }
}
