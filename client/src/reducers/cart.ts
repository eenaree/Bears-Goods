import { Option } from '@typings/db';

export interface CartState {
  cart: Option[];
  cartTotalPrice: number;
}

export type CartAction =
  | { type: 'ADD_CART_ITEM'; options: Option[] }
  | { type: 'REMOVE_CART_ITEM'; item: Option }
  | { type: 'CHANGE_CART_ITEM_QUANTITY'; item: Option; quantity: number }
  | { type: 'RESET_CART' };

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_CART_ITEM':
      return {
        ...state,
        cart: state.cart
          .concat(action.options)
          .reduce<Option[]>((prev, curr) => {
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
          action.options
            .map(option => option.price * option.quantity)
            .reduce((prev, curr) => prev + curr, 0),
      };
    case 'REMOVE_CART_ITEM':
      return {
        ...state,
        cart: state.cart.filter(
          item =>
            item.name !== action.item.name || item.size !== action.item.size
        ),
        cartTotalPrice:
          state.cartTotalPrice - action.item.price * action.item.quantity,
      };
    case 'CHANGE_CART_ITEM_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.name === action.item.name && item.size === action.item.size
            ? { ...action.item, quantity: action.quantity }
            : item
        ),
        cartTotalPrice: state.cart.reduce(
          (prev, curr) =>
            curr.name === action.item.name && curr.size === action.item.size
              ? prev + curr.price * action.quantity
              : prev + curr.price * curr.quantity,
          0
        ),
      };
    case 'RESET_CART':
      return {
        ...state,
        cart: [],
        cartTotalPrice: 0,
      };
  }
}
