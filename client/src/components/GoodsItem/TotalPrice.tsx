import * as React from 'react';
import { useOption } from '@context/OptionContext';
import { addThousandSeperatorToNumber } from '@lib/utils';
import { styles } from './styles';

export default function TotalPrice() {
  const option = useOption();
  const totalPrice = option.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );

  return (
    <div css={styles.totalPriceArea}>
      <span>총 주문금액</span>
      <span css={styles.totalPrice}>
        <strong>{addThousandSeperatorToNumber(totalPrice)}</strong> 원
      </span>
    </div>
  );
}
