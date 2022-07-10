import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import goodsAPI from '@api/goods';
import ErrorMessage from '@components/ErrorMessage';
import Categories from '@components/GoodsFilters/Categories';
import PriceSorting from '@components/GoodsFilters/PriceSorting';
import GoodsList from '@components/GoodsList';
import ProgressBar from '@components/ProgressBar';
import useAxiosWithAbort from '@hooks/useAxiosWithAbort';
import useSortBy from '@hooks/useSortBy';
import { GoodsCategory, GoodsData } from '@typings/db';

export default function Main(): React.ReactElement {
  const [searchParams] = useSearchParams();
  const category = (searchParams.get('category') as GoodsCategory) || '';
  const [sortBy, onChangeSortBy] = useSortBy();

  const [data, error] = useAxiosWithAbort<GoodsData[]>(
    goodsAPI.getGoodsList,
    category
  );

  return (
    <main>
      <ProgressBar />
      <section>
        <Categories />
        <PriceSorting sortBy={sortBy} onChangeSortBy={onChangeSortBy} />
      </section>
      {data && <GoodsList data={data} sortBy={sortBy} />}
      {error && (
        <ErrorMessage>상품 정보를 가져오는데 실패했습니다.</ErrorMessage>
      )}
    </main>
  );
}
