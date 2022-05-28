import * as React from 'react';
import { useEffect, useState } from 'react';
import goodsAPI from '@api/goods';
import GoodsCard from '@components/GoodsCard';
import { GoodsData } from '@typings/db';
import { GoodsCardList } from './styles';

const renderGoodsCardList = (goodsList: GoodsData[]): React.ReactElement[] =>
  goodsList.map(goods => (
    <GoodsCard key={goods.id} id={goods.id} img={goods.img} name={goods.name} />
  ));

export default function Main(): React.ReactElement {
  const [goodsList, setGoodsList] = useState<GoodsData[]>([]);

  useEffect(() => {
    goodsAPI
      .getGoodsList()
      .then(({ data }) => {
        setGoodsList(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      {goodsList.length > 0 && (
        <GoodsCardList>{renderGoodsCardList(goodsList)}</GoodsCardList>
      )}
    </>
  );
}
