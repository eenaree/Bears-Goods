import * as React from 'react';
import { useCallback } from 'react';
import { BiError } from 'react-icons/bi';
import { useSearchParams } from 'react-router-dom';
import goodsAPI from '@api/goods';
import Category from '@components/Category';
import GoodsCard from '@components/GoodsCard';
import PriceSorting from '@components/PriceSorting';
import ProgressBar from '@components/ProgressBar';
import useAxiosWithAbort from '@hooks/useAxiosWithAbort';
import { GoodsData } from '@typings/db';
import { CreateError, GoodsCardList } from './styles';

interface GoodsFilter {
  category: string;
  sort: string;
  order: string;
}

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
  const [searchParams, setSearchParams] = useSearchParams();
  const { category, sort, order }: GoodsFilter = {
    category: searchParams.get('category') || '',
    order: searchParams.get('order') || '',
    sort: searchParams.get('order') ? 'price' : '',
  };
  const handleChangeFormFilter = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      const formData = new FormData(e.currentTarget);
      const params = new URLSearchParams();
      for (const [key, value] of formData) {
        if (value !== '') {
          if (key === 'order') {
            params.set('sort', 'price');
          }
          params.set(key, value as string);
        }
      }
      setSearchParams(params);
    },
    []
  );

  const { status, data, error } = useAxiosWithAbort<GoodsData[]>(
    goodsAPI.getGoodsList,
    category,
    sort,
    order
  );

  return (
    <>
      <ProgressBar isLoading={status === 'loading'} />
      <form onChange={handleChangeFormFilter}>
        <Category category={category} />
        <PriceSorting order={order} />
      </form>
      {data && <GoodsCardList>{renderGoodsCardList(data)}</GoodsCardList>}
      {error && (
        <CreateError>
          <BiError size="5rem" color="#ff0000" />
          <p>상품 정보를 가져오는데 실패했습니다.</p>
        </CreateError>
      )}
    </>
  );
}
