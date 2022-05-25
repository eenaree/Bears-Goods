import * as React from 'react';
import { createContext, useContext, useReducer } from 'react';
import { CartAction, CartState, cartReducer } from '@reducers/cart';
import { CartItemOption } from '@typings/db';
import { checkObject } from '@utils';
import useLocalStorage from '@hooks/useLocalStorage';

interface Props {
  children: React.ReactElement;
}

const CartStateContext = createContext<CartState | undefined>(undefined);

const CartDispatchContext = createContext<
  React.Dispatch<CartAction> | undefined
>(undefined);

export const useCartState = () => {
  const state = useContext(CartStateContext);
  if (!state) {
    throw new Error('CartStateProvider can not found');
  }
  return state;
};

export const useCartDispatch = () => {
  const dispatch = useContext(CartDispatchContext);
  if (!dispatch) {
    throw new Error('CartDispatchProvider can not found');
  }
  return dispatch;
};

const checkCart = (cart: any): cart is CartItemOption[] => {
  if (Array.isArray(cart)) {
    if (cart.length > 0) {
      cart.map(item => {
        if (checkObject(item)) {
          return (
            'id' in item &&
            'img' in item &&
            'name' in item &&
            'size' in item &&
            'price' in item &&
            'quantity' in item &&
            'selected' in item
          );
        } else {
          return false;
        }
      });
    }
    return true;
  }

  return false;
};

const initializeCart = (initialCart: CartItemOption[]): CartState => {
  if (initialCart.length > 0) {
    const cartTotalPrice: number = initialCart.reduce(
      (prev, curr) =>
        curr.selected ? prev + curr.price * curr.quantity : prev,
      0
    );
    const allSelected: boolean = initialCart.every(item => item.selected);
    return { cart: initialCart, cartTotalPrice, allSelected };
  } else {
    return { cart: [], cartTotalPrice: 0, allSelected: false };
  }
};

export const CartProvider = ({ children }: Props): React.ReactElement => {
  const storagedCart = useLocalStorage<CartItemOption[]>('cart', checkCart, []);
  const [{ cart, cartTotalPrice, allSelected }, dispatch] = useReducer(
    cartReducer,
    storagedCart,
    initializeCart
  );

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={{ cart, cartTotalPrice, allSelected }}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};
