import * as React from 'react';
import { GoodsOption } from '@typings/db';
import { styles } from './styles';

interface Props {
  img: GoodsOption['img'];
  alt: GoodsOption['name'];
}

export default function CartItemImage({ img, alt }: Props): React.ReactElement {
  return (
    <span css={styles.cartItemImage}>
      <img src={img} alt={alt} />
    </span>
  );
}
