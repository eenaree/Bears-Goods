import * as React from 'react';
import OptionProvider from '@context/OptionContext';
import { GoodsData } from '@typings/db';
import GoodsImage from './GoodsImage';
import GoodsInfo from './GoodsInfo';
import GoodsLabel from './GoodsLabel';
import GoodsOptionPicker from './GoodsOptionPicker';
import { styles } from './styles';
import TotalPrice from './TotalPrice';

interface Props {
  item: GoodsData;
}

export default function GoodsItem({ item }: Props): React.ReactElement {
  return (
    <section css={styles.goodsItemZone}>
      <GoodsImage img={item.img} alt={item.name} />
      <GoodsInfo>
        <GoodsLabel name={item.name} price={item.price} />
        <OptionProvider>
          <TotalPrice />
          <GoodsOptionPicker item={item} />
        </OptionProvider>
      </GoodsInfo>
    </section>
  );
}
