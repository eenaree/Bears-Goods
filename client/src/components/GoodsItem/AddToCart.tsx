import * as React from 'react';
import { useModalDispatch } from '@context/ModalContext';
import { useOption } from '@context/OptionContext';
import { useAppDispatch } from '@store/hooks';
import { addCartItem } from '@store/slices/cartSlice';
import { styles } from './styles';

export default function AddToCart() {
  const option = useOption();

  const appDispatch = useAppDispatch();
  const modalDispatch = useModalDispatch();

  const onClick = () => {
    appDispatch(addCartItem(option));
    modalDispatch({ type: 'OPEN_MODAL' });
  };

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
