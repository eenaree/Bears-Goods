import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Category from '@components/Category';
import GoodsCard from '@components/GoodsCard';
import PriceSorting from '@components/PriceSorting';
import ProgressBar from '@components/ProgressBar';
import { GoodsData } from '@typings/db';
import goodsAPI from '@api/goods';
import { CreateError, GoodsCardList } from './styles';
import { BiError } from 'react-icons/bi';

interface GoodsListState {
  status: 'idle' | 'loading' | 'resolved' | 'rejected';
  goods: GoodsData[] | null;
  error: unknown;
}

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
  const [state, setState] = useState<GoodsListState>({
    status: 'idle',
    goods: null,
    error: null,
  });
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

  useEffect(() => {
    const abortController = new AbortController();
    setState({ status: 'loading', goods: null, error: null });
    goodsAPI
      .getGoodsList(
        { category, sort, order },
        { signal: abortController.signal }
      )
      .then(({ data }) => {
        setTimeout(() => {
          if (abortController.signal.aborted) return;
          setState({ status: 'resolved', goods: data, error: null });
        }, 500);
      })
      .catch((error: unknown) => {
        if (axios.isAxiosError(error)) {
          setTimeout(() => {
            if (abortController.signal.aborted) return;
            setState({
              status: 'rejected',
              goods: null,
              error: error.response,
            });
          }, 500);
        }
      });
    return () => {
      abortController.abort();
    };
  }, [category, sort, order]);

  return (
    <>
      <ProgressBar isLoading={state.status === 'loading'} />
      <form onChange={handleChangeFormFilter}>
        <Category category={category} />
        <PriceSorting order={order} />
      </form>
      {state.goods && (
        <GoodsCardList>{renderGoodsCardList(state.goods)}</GoodsCardList>
      )}
      {state.error && (
        <CreateError>
          <BiError size="5rem" color="#ff0000" />
          <p>상품 정보를 가져오는데 실패했습니다.</p>
        </CreateError>
      )}
    </>
  );
}
