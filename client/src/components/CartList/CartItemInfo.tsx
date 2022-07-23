import * as React from 'react';
import { addThousandSeperatorToNumber } from '@lib/utils';
import { GoodsOption } from '@typings/db';
import { styles } from './styles';

interface Props {
  item: GoodsOption;
}

export default function CartItemInfo({ item }: Props): React.ReactElement {
  return (
    <span css={styles.cartItemInfo}>
      <strong>{item.name}</strong>
      <span>
        Size: <strong>{item.size}</strong>
      </span>
      <strong>{addThousandSeperatorToNumber(item.price)}원</strong>
    </span>
  );
}
