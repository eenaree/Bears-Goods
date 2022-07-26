import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import goodsAPI from '@api/goods';
import GoodsItem from '@components/GoodsItem';
import LoadingSpinner from '@components/LoadingSpinner';
import { GoodsData } from '@typings/db';

export default function Detail() {
  const params = useParams<'id'>();
  const [goods, setGoods] = useState<GoodsData | null>(null);

  useEffect(() => {
    if (params.id) {
      goodsAPI
        .getGoods(params.id)
        .then(({ data }) => {
          setGoods(data);
        })
        .catch(error => console.error(error));
    }
  }, [params.id]);

  return (
    <>
      <LoadingSpinner />
      <main>{goods && <GoodsItem item={goods} />}</main>
    </>
  );
}
