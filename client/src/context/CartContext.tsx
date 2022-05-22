import * as React from 'react';
import { createContext, useContext, useReducer } from 'react';
import { CartAction, CartState, cartReducer } from '@reducers/cart';
import { Option } from '@typings/db';
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

const checkCart = (cart: any): cart is Option[] => {
  if (Array.isArray(cart)) {
    if (cart.length > 0) {
      if (checkObject(cart[0])) {
        return (
          'id' in cart[0] &&
          'img' in cart[0] &&
          'name' in cart[0] &&
          'size' in cart[0] &&
          'price' in cart[0] &&
          'quantity' in cart[0]
        );
      } else {
        return false;
      }
    }
    return true;
  }

  return false;
};

const initializeCart = (initialCart: Option[]): CartState => {
  if (initialCart.length > 0) {
    let cartTotalPrice = 0;
    initialCart.forEach(cart => {
      cartTotalPrice += cart.quantity * cart.price;
    });
    return { cart: initialCart, cartTotalPrice };
  } else {
    return { cart: [], cartTotalPrice: 0 };
  }
};

export const CartProvider = ({ children }: Props): React.ReactElement => {
  const storagedCart = useLocalStorage<Option[]>('cart', checkCart, []);
  const [{ cart, cartTotalPrice }, dispatch] = useReducer(
    cartReducer,
    storagedCart,
    initializeCart
  );

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={{ cart, cartTotalPrice }}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};
