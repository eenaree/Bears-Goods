import * as React from 'react';
import { BiError } from 'react-icons/bi';
import { useSearchParams } from 'react-router-dom';
import goodsAPI from '@api/goods';
import Categories from '@components/GoodsFilters/Categories';
import PriceSorting from '@components/GoodsFilters/PriceSorting';
import GoodsList from '@components/GoodsList';
import ProgressBar from '@components/ProgressBar';
import useAxiosWithAbort from '@hooks/useAxiosWithAbort';
import useSortBy from '@hooks/useSortBy';
import { GoodsCategory, GoodsData } from '@typings/db';
import { CreateError } from './styles';

export default function Main(): React.ReactElement {
  const [searchParams] = useSearchParams();
  const category = (searchParams.get('category') as GoodsCategory) || '';
  const [sortBy, onChangeSortBy] = useSortBy();

  const { status, data, error } = useAxiosWithAbort<GoodsData[]>(
    goodsAPI.getGoodsList,
    category
  );

  return (
    <main>
      <ProgressBar isLoading={status === 'loading'} />
      <section>
        <Categories />
        <PriceSorting sortBy={sortBy} onChangeSortBy={onChangeSortBy} />
      </section>
      {data && <GoodsList data={data} sortBy={sortBy} />}
      {error && (
        <CreateError>
          <BiError size="5rem" color="#ff0000" />
          <p>상품 정보를 가져오는데 실패했습니다.</p>
        </CreateError>
      )}
    </main>
  );
}
