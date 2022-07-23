import * as React from 'react';
import { useAppSelector } from '@store/hooks';
import { selectCartItem } from '@store/slices/cartSlice';
import { GoodsOption } from '@typings/db';
import CartItemImage from './CartItemImage';
import CartItemInfo from './CartItemInfo';
import { styles } from './styles';

interface Props {
  id: GoodsOption['id'];
  size: GoodsOption['size'];
}

export default function CartItem({
  id,
  size,
}: Props): React.ReactElement | null {
  const item = useAppSelector(state => selectCartItem(state, id, size));

  if (!item) return null;

  return (
    <li css={styles.cartItemZone}>
      <CartItemImage img={item.img} alt={item.name} />
      <CartItemInfo item={item} />
    </li>
  );
}
