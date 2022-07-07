import * as React from 'react';
import GoodsCardImage from './GoodsCardImage';
import GoodsCardLabel from './GoodsCardLabel';
import { styles } from './styles';

export default function GoodsCard(): React.ReactElement {
  return (
    <article css={styles.goodsCardZone}>
      <GoodsCardImage />
      <GoodsCardLabel />
    </article>
  );
}
