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

  const sortByPricing = () => {
    const copiedData = data && data.slice();
    if (copiedData) {
      if (sortBy === 'asc') {
        copiedData.sort((a, b) => a.price - b.price);
        return copiedData;
      }
      if (sortBy === 'desc') {
        copiedData.sort((a, b) => b.price - a.price);
        return copiedData;
      }
      return copiedData;
    }

    return null;
  };

  const sortedData = sortByPricing();

  return (
    <main>
      <ProgressBar />
      <section>
        <Categories />
        <PriceSorting sortBy={sortBy} onChangeSortBy={onChangeSortBy} />
      </section>
      {sortedData && <GoodsList goods={sortedData} />}
      {error && <ErrorMessage error={error} />}
    </main>
  );
}
