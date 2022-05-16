import * as React from 'react';
import { useEffect, useState } from 'react';
import goodsAPI from '@api/goods';
import GoodsCard from '@components/GoodsCard';
import GoodsFilter from '@components/GoodsFilter';
import { GoodsData } from '@typings/db';
import { GoodsCardList } from './styles';

const renderGoodsCardList = (goodsList: GoodsData[]): React.ReactElement[] =>
  goodsList.map(goods => (
    <GoodsCard
      key={goods.id}
      id={goods.id}
      img={goods.img}
      name={goods.name}
      price={goods.price}
    />
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

  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFilter(e.target.defaultValue);
  };
  const [filteredGoodsList, setFilteredGoodsList] = useState<GoodsData[]>([]);

  useEffect(() => {
    if (selectedFilter !== 'all') {
      const filteredGoodsList = goodsList.filter(
        goods => goods.category === selectedFilter
      );
      setFilteredGoodsList(filteredGoodsList);
    }
  }, [selectedFilter, goodsList]);

  return (
    <>
      <GoodsFilter filter={selectedFilter} onChangeFilter={onChangeFilter} />
      {goodsList.length > 0 && (
        <GoodsCardList>
          {selectedFilter === 'all'
            ? renderGoodsCardList(goodsList)
            : renderGoodsCardList(filteredGoodsList)}
        </GoodsCardList>
      )}
    </>
  );
}
