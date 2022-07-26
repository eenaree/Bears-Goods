import * as React from 'react';
import { Link } from 'react-router-dom';
import { GoodsOption } from '@typings/db';
import { styles } from './styles';

interface Props {
  id: GoodsOption['id'];
  img: GoodsOption['img'];
  alt: GoodsOption['name'];
}

export default function CartItemImage({ id, img, alt }: Props) {
  return (
    <Link to={`/goods/${id}`} css={styles.cartItemImage}>
      <img src={img} alt={alt} />
    </Link>
  );
}
