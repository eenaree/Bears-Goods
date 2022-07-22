import * as React from 'react';
import { useEffect } from 'react';
import { useOption } from '@context/OptionContext';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { addCartItem, selectCart } from '@store/slices/cartSlice';
import { styles } from './styles';

export default function AddToCart(): React.ReactElement {
  const option = useOption();
  const cart = useAppSelector(selectCart);

  const appDispatch = useAppDispatch();

  const onClick = () => {
    appDispatch(addCartItem(option));
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <button
      css={styles.cartButton}
      disabled={option.length === 0}
      onClick={onClick}
    >
      장바구니 추가
    </button>
  );
}
