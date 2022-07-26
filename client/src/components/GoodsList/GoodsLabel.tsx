import * as React from 'react';
import { addThousandSeperatorToNumber } from '@lib/utils';
import { GoodsData } from '@typings/db';
import { styles } from './styles';

interface Props {
  name: GoodsData['name'];
  price: GoodsData['price'];
}

export default function GoodsLabel({ name, price }: Props) {
  return (
    <span css={styles.goodsLabel}>
      <em>{name}</em>
      <em>
        <strong>{addThousandSeperatorToNumber(price)}</strong> 원
      </em>
    </span>
  );
}
