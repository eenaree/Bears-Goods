import * as React from 'react';
import { addThousandSeperatorToNumber } from '@lib/utils';
import { GoodsOption } from '@typings/db';
import CartItemQuantityInput from './CartItemQuantityInput';
import { styles } from './styles';

interface Props {
  item: GoodsOption;
}

export default function CartItemInfo({ item }: Props) {
  return (
    <span css={styles.cartItemInfo}>
      <strong>{item.name}</strong>
      <span>
        Size: <strong>{item.size}</strong>
      </span>
      <strong>{addThousandSeperatorToNumber(item.price)}원</strong>
      <CartItemQuantityInput
        id={item.id}
        size={item.size}
        quantity={item.quantity}
      />
    </span>
  );
}
