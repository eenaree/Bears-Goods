import { Option } from '@typings/db';

export interface CartState {
  cart: Option[];
  cartTotalPrice: number;
}

export type CartAction = {
  type: 'ADD_CART_ITEM';
  options: Option[];
};

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
  }
}
