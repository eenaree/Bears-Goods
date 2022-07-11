import * as React from 'react';
import { Link } from 'react-router-dom';
import { useGoodsValue } from '@context/GoodsContext';
import GoodsCardImage from './GoodsCardImage';
import GoodsCardLabel from './GoodsCardLabel';
import { styles } from './styles';

export default function GoodsCard(): React.ReactElement {
  const { id } = useGoodsValue();
  return (
    <Link to={`/goods/${id}`} css={styles.goodsCardLink}>
      <GoodsCardImage />
      <GoodsCardLabel />
    </Link>
  );
}
