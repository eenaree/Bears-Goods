import * as React from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  addWishItem,
  removeWishItem,
  selectIsWishItem,
} from '@store/slices/wishSlice';
import { GoodsData } from '@typings/db';
import { styles } from './styles';

interface Props {
  item: GoodsData;
}

export default function AddToWish({ item }: Props) {
  const isWishItem = useAppSelector(state => selectIsWishItem(state, item.id));
  const appDispatch = useAppDispatch();

  const onClick = () => {
    if (!isWishItem) {
      appDispatch(addWishItem(item));
    } else {
      appDispatch(removeWishItem(item.id));
    }
  };

  return (
    <button onClick={onClick} css={styles.wishButton}>
      찜하기
    </button>
  );
}
