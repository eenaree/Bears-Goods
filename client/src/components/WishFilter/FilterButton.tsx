import * as React from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { changeWishFilter, selectWishFilter } from '@store/slices/wishSlice';
import { GoodsCategory } from '@typings/db';
import { styles } from './styles';

interface Props {
  filter: GoodsCategory | 'all';
  filterCount: number;
}

const categories = {
  all: '전체',
  uniform: '유니폼',
  clothing: '의류',
  cap: '모자',
};

export default function FilterButton({ filter, filterCount }: Props) {
  const currentFilter = useAppSelector(selectWishFilter);
  const appDispatch = useAppDispatch();
  const onClick = () => {
    appDispatch(changeWishFilter(filter));
  };

  return (
    <button
      onClick={onClick}
      css={styles.filterButton(filter === currentFilter)}
    >
      {categories[filter]} ({filterCount})
    </button>
  );
}
