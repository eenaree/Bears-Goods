import * as React from 'react';
import { CgTrash } from 'react-icons/cg';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { removeCartItem, selectCartItem } from '@store/slices/cartSlice';
import { GoodsOption } from '@typings/db';
import CartItemCheckbox from './CartItemCheckbox';
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

  const appDispatch = useAppDispatch();
  const onClick = () => {
    appDispatch(removeCartItem({ id, size }));
  };

  if (!item) return null;

  return (
    <li css={styles.cartItemZone}>
      <CartItemCheckbox itemIndex={`${item.id}-${item.size}`} />
      <CartItemImage id={item.id} img={item.img} alt={item.name} />
      <CartItemInfo item={item} />
      <button onClick={onClick}>
        <CgTrash size="2rem" />
      </button>
    </li>
  );
}
