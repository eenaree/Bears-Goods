import * as React from 'react';
import { Link } from 'react-router-dom';
import { useGoodsValue } from '@context/GoodsContext';
import { styles } from './styles';

export default function GoodsCardImage(): React.ReactElement {
  const { id, img, name } = useGoodsValue();
  return (
    <div css={styles.cardImageArea}>
      <Link to={`/goods/${id}`} title={name}>
        <img src={img} alt={name} />
      </Link>
    </div>
  );
}
