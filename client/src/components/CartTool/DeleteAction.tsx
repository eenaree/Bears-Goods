import * as React from 'react';
import { useModalDispatch } from '@context/ModalContext';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  removeSelectedCartItem,
  selectCartItemCheckedCount,
} from '@store/slices/cartSlice';
import { styles } from './styles';

export default function DeleteAction(): React.ReactElement {
  const cartItemCheckedCount = useAppSelector(selectCartItemCheckedCount);

  const appDispatch = useAppDispatch();
  const modalDispatch = useModalDispatch();

  const onClick = () => {
    if (cartItemCheckedCount === 0) {
      modalDispatch({ type: 'OPEN_MODAL' });
      return;
    }
    appDispatch(removeSelectedCartItem());
  };

  return (
    <button onClick={onClick} css={styles.cartActionButton}>
      선택 삭제
    </button>
  );
}
