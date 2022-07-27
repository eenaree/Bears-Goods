import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import goodsAPI from '@api/goods';
import ErrorMessage from '@components/ErrorMessage';
import GoodsItem from '@components/GoodsItem';
import LoadingSpinner from '@components/LoadingSpinner';
import { GoodsData } from '@typings/db';

interface Payload {
  goods: GoodsData | null;
  error: string | null;
}

export default function Detail() {
  const params = useParams<'id'>();
  const [{ goods, error }, setPayload] = useState<Payload>({
    goods: null,
    error: null,
  });

  useEffect(() => {
    let shouldSetState = true;

    if (params.id) {
      goodsAPI
        .getGoods(params.id)
        .then(({ data }) => {
          if (!shouldSetState) return;
          setPayload({ goods: data, error: null });
        })
        .catch((error: unknown) => {
          if (!shouldSetState) return;
          if (error instanceof Error) {
            setPayload({ goods: null, error: error.message });
          }
        });
    }

    return () => {
      shouldSetState = false;
    };
  }, [params.id]);

  return (
    <>
      <LoadingSpinner />
      <main>{goods && <GoodsItem item={goods} />}</main>
      {error && <ErrorMessage error={error} />}
    </>
  );
}
