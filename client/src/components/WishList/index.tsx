import * as React from 'react';
import { useAppSelector } from '@store/hooks';
import { selectWishFilter, selectWishItems } from '@store/slices/wishSlice';
import WishItem from './WishItem';

export default function WishList() {
  const wishItems = useAppSelector(selectWishItems);
  const currentFilter = useAppSelector(selectWishFilter);

  const filteredWishItems = wishItems.filter(item => {
    return currentFilter === 'all' ? item : item.category === currentFilter;
  });

  return (
    <section>
      <ul>
        {filteredWishItems.map(item => (
          <WishItem key={item.id} id={item.id} />
        ))}
      </ul>
    </section>
  );
}
