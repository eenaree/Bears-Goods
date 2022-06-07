import * as React from 'react';
import { createContext, useContext, useReducer, useMemo } from 'react';
import { CartAction, CartState, cartReducer } from '@reducers/cart';
import { CartItemOption } from '@typings/db';
import { checkObject, getLocalStorage } from '@utils';

interface Props {
  children: React.ReactElement;
}

const CartStateContext = createContext<CartState | undefined>(undefined);

const CartDispatchContext = createContext<
  React.Dispatch<CartAction> | undefined
>(undefined);

const CartListCountContext = createContext<number>(0);

export const useCartListCount = () => {
  return useContext(CartListCountContext);
};

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

const initializeCart = (): CartState => {
  const initialCart = getLocalStorage('cart', checkCart, []);
  if (initialCart.length > 0) {
    return { cart: initialCart };
  } else {
    return { cart: [] };
  }
};

export const CartProvider = ({ children }: Props): React.ReactElement => {
  const [{ cart }, dispatch] = useReducer(cartReducer, null, initializeCart);
  const cartListCount: number = useMemo(() => cart.length, [cart.length]);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartListCountContext.Provider value={cartListCount}>
        <CartStateContext.Provider value={{ cart }}>
          {children}
        </CartStateContext.Provider>
      </CartListCountContext.Provider>
    </CartDispatchContext.Provider>
  );
};
