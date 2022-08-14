import * as React from 'react';
import { Link } from 'react-router-dom';
import { addThousandSeperatorToNumber } from '@lib/utils';
import { useAppSelector } from '@store/hooks';
import { selectWishItem } from '@store/slices/wishSlice';
import { styles } from './styles';

interface Props {
  id: number;
}

export default function WishItem({ id }: Props) {
  const item = useAppSelector(state => selectWishItem(state, id));

  if (!item) return null;

  return (
    <li css={styles.wishItem}>
      <Link to={`/goods/${item.id}`} css={styles.wishItemImageArea}>
        <img src={item.img} alt={item.name} />
      </Link>
      <span css={styles.wishItemInfoArea}>
        <span>{item.name}</span>
        <strong>{addThousandSeperatorToNumber(item.price)}원</strong>
      </span>
    </li>
  );
}
