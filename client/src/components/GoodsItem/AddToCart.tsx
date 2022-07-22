import * as React from 'react';
import { useEffect } from 'react';
import { useModalDispatch } from '@context/ModalContext';
import { useOption } from '@context/OptionContext';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { addCartItem, selectCart } from '@store/slices/cartSlice';
import { styles } from './styles';

export default function AddToCart(): React.ReactElement {
  const option = useOption();
  const cart = useAppSelector(selectCart);

  const appDispatch = useAppDispatch();
  const modalDispatch = useModalDispatch();

  const onClick = () => {
    appDispatch(addCartItem(option));
    modalDispatch({ type: 'OPEN_MODAL' });
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
