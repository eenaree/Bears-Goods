import * as React from 'react';
import { GoodsData } from '@typings/db';
import { styles } from './styles';

interface Props {
  img: GoodsData['img'];
  alt: GoodsData['name'];
}

export default function GoodsImage({ img, alt }: Props): React.ReactElement {
  return (
    <div css={styles.goodsImageArea}>
      <img src={img} alt={alt} />
    </div>
  );
}
