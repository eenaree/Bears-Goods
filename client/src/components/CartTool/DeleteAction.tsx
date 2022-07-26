import * as React from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  removeSelectedCartItem,
  selectCartItemCheckedCount,
} from '@store/slices/cartSlice';

export default function DeleteAction(): React.ReactElement {
  const cartItemCheckedCount = useAppSelector(selectCartItemCheckedCount);

  const appDispatch = useAppDispatch();

  const onClick = () => {
    if (cartItemCheckedCount === 0) {
      alert('선택한 상품이 없습니다. 삭제할 상품을 선택하세요.');
      return;
    }
    appDispatch(removeSelectedCartItem());
  };

  return <button onClick={onClick}>선택 삭제</button>;
}
