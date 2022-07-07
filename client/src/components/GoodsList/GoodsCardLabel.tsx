import * as React from 'react';
import { useGoodsValue } from '@context/GoodsContext';
import { addThousandSeperatorToNumber } from '@lib/utils';
import { styles } from './styles';

export default function GoodsCardLabel(): React.ReactElement {
  const { name, price } = useGoodsValue();
  return (
    <div css={styles.cardLabelArea}>
      <p>{name}</p>
      <p>
        <strong>{addThousandSeperatorToNumber(price)}</strong> 원
      </p>
    </div>
  );
}
