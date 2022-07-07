import * as React from 'react';
import { BiError } from 'react-icons/bi';
import { useSearchParams } from 'react-router-dom';
import goodsAPI from '@api/goods';
import GoodsCard from '@components/GoodsCard';
import Categories from '@components/GoodsFilters/Categories';
import ProgressBar from '@components/ProgressBar';
import useAxiosWithAbort from '@hooks/useAxiosWithAbort';
import { GoodsCategory, GoodsData } from '@typings/db';
import { CreateError, GoodsCardList } from './styles';

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
  const [searchParams] = useSearchParams();
  const category = (searchParams.get('category') as GoodsCategory) || '';

  const { status, data, error } = useAxiosWithAbort<GoodsData[]>(
    goodsAPI.getGoodsList,
    category
  );

  return (
    <main>
      <ProgressBar isLoading={status === 'loading'} />
      <section>
        <Categories />
      </section>
      {data && <GoodsCardList>{renderGoodsCardList(data)}</GoodsCardList>}
      {error && (
        <CreateError>
          <BiError size="5rem" color="#ff0000" />
          <p>상품 정보를 가져오는데 실패했습니다.</p>
        </CreateError>
      )}
    </main>
  );
}
