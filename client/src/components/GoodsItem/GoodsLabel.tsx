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
    <div css={styles.labelArea}>
      <h2 css={styles.titleLabel}>{name}</h2>
      <p css={styles.priceLabel}>
        <strong>{addThousandSeperatorToNumber(price)}</strong> 원
      </p>
    </div>
  );
}
