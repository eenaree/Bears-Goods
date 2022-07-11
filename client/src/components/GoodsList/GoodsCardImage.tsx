import * as React from 'react';
import { useGoodsValue } from '@context/GoodsContext';
import { styles } from './styles';

export default function GoodsCardImage(): React.ReactElement {
  const { img, name } = useGoodsValue();
  return (
    <span css={styles.cardImageArea}>
      <img src={img} alt={name} />
    </span>
  );
}
