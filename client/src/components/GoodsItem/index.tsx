import * as React from 'react';
import { GoodsData } from '@typings/db';
import GoodsImage from './GoodsImage';
import GoodsInfo from './GoodsInfo';
import GoodsLabel from './GoodsLabel';
import { styles } from './styles';

interface Props {
  item: GoodsData;
}

export default function GoodsItem({ item }: Props): React.ReactElement {
  return (
    <section css={styles.goodsItemZone}>
      <GoodsImage img={item.img} alt={item.name} />
      <GoodsInfo>
        <GoodsLabel name={item.name} price={item.price} />
      </GoodsInfo>
    </section>
  );
}
