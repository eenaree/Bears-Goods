import * as React from 'react';
import { useAppSelector } from '@store/hooks';
import { selectWishItems } from '@store/slices/wishSlice';
import WishItem from './WishItem';

export default function WishList() {
  const wishItems = useAppSelector(selectWishItems);

  return (
    <section>
      <ul>
        {wishItems.map(item => (
          <WishItem key={item.id} id={item.id} />
        ))}
      </ul>
    </section>
  );
}
