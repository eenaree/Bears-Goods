import * as React from 'react';
import { Link } from 'react-router-dom';
import { GoodsData } from '@typings/db';
import GoodsImage from './GoodsImage';
import GoodsLabel from './GoodsLabel';
import { styles } from './styles';

interface Props {
  goods: GoodsData[];
}

export default function GoodsList({ goods }: Props) {
  return (
    <section>
      <h2 css={styles.blind}>상품리스트</h2>
      <div css={styles.goodsListZone}>
        {goods.map(goods => (
          <Link key={goods.id} to={`/goods/${goods.id}`} css={styles.goodsLink}>
            <GoodsImage img={goods.img} alt={goods.name} />
            <GoodsLabel name={goods.name} price={goods.price} />
          </Link>
        ))}
      </div>
    </section>
  );
}
