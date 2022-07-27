import * as React from 'react';
import { addThousandSeperatorToNumber } from '@lib/utils';
import { styles } from './styles';

interface Props {
  title: string;
  price: number;
}

export default function PriceArea({ title, price }: Props) {
  return (
    <p css={styles.cartPriceArea}>
      <span>{title}</span>
      <span>
        <strong>{addThousandSeperatorToNumber(price)} 원</strong>
      </span>
    </p>
  );
}
