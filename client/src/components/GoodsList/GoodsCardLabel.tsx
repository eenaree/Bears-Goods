import * as React from 'react';
import { useGoodsValue } from '@context/GoodsContext';
import { addThousandSeperatorToNumber } from '@lib/utils';
import { styles } from './styles';

export default function GoodsCardLabel(): React.ReactElement {
  const { name, price } = useGoodsValue();
  return (
    <span css={styles.cardLabelArea}>
      <em>{name}</em>
      <em>
        <strong>{addThousandSeperatorToNumber(price)}</strong> 원
      </em>
    </span>
  );
}
