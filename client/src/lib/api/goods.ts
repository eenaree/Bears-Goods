import { goodsAPI } from '@api/default';
import { GoodsData } from '@typings/db';

export default {
  getGoodsList: (signal: AbortSignal, category: string) => {
    return goodsAPI.request<GoodsData[]>({
      url: `/goods`,
      params: {
        category: category || null,
      },
      signal,
    });
  },
  getGoods: (id: string) => {
    return goodsAPI.get<GoodsData>(`/goods/${id}`);
  },
};
