import { AxiosRequestConfig } from 'axios';
import { goodsAPI } from '@api/default';
import { GoodsData } from '@typings/db';

export default {
  getGoodsList: (config: AxiosRequestConfig, category?: string) => {
    return goodsAPI.get<GoodsData[]>(
      `/goods?${category ? `category=${category}` : ''}`,
      config
    );
  },
  getGoods: (id: string) => {
    return goodsAPI.get<GoodsData>(`/goods/${id}`);
  },
};
