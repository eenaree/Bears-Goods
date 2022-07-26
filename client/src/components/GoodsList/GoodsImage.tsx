import * as React from 'react';
import { GoodsData } from '@typings/db';
import { styles } from './styles';

interface Props {
  img: GoodsData['img'];
  alt: GoodsData['name'];
}

export default function GoodsImage({ img, alt }: Props) {
  return (
    <span css={styles.goodsImage}>
      <img src={img} alt={alt} />
    </span>
  );
}
