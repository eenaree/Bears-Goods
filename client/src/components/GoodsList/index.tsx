import * as React from 'react';
import GoodsCard from '@components/GoodsCard';
import { GoodsData } from '@typings/db';
import { styles } from './styles';

interface Props {
  data: GoodsData[];
  sortBy: string;
}

export default function GoodsList({ data, sortBy }: Props): React.ReactElement {
  const copiedData = data.slice();
  const sortByPricing = (): GoodsData[] => {
    if (sortBy === 'asc') {
      copiedData.sort((a, b) => a.price - b.price);
      return copiedData;
    }
    if (sortBy === 'desc') {
      copiedData.sort((a, b) => b.price - a.price);
      return copiedData;
    }
    return copiedData;
  };

  const sortedGoodsData = sortByPricing();

  return (
    <section css={styles.goodsListZone}>
      {sortedGoodsData.map(data => (
        <GoodsCard
          key={data.id}
          id={data.id}
          img={data.img}
          name={data.name}
          price={data.price}
        />
      ))}
    </section>
  );
}