import * as React from 'react';
import { useAppSelector } from '@store/hooks';
import {
  selectWishFilterList,
  selectWishItemCount,
} from '@store/slices/wishSlice';
import FilterButton from './FilterButton';

export default function WishFilter() {
  const wishFilterList = useAppSelector(selectWishFilterList);
  const wishItemCount = useAppSelector(selectWishItemCount);

  return (
    <section>
      <FilterButton filter="all" filterCount={wishItemCount} />
      {wishFilterList.map(([filter, filterCount]) => (
        <FilterButton key={filter} filter={filter} filterCount={filterCount} />
      ))}
    </section>
  );
}
