import { goodsAPI } from '@api/default';
import { GoodsData } from '@typings/db';

export const getGoodsList = (signal: AbortSignal, category: string) => {
  return goodsAPI.request<GoodsData[]>({
    url: `/goods`,
    params: {
      category: category || null,
    },
    signal,
  });
};

export const getGoods = (id: string) => {
  return goodsAPI.get<GoodsData>(`/goods/${id}`);
};
