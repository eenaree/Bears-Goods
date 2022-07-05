import { AxiosRequestConfig } from 'axios';
import { server } from '@api/default';
import { GoodsData } from '@typings/db';

const goodsAPI = {
  getGoodsList: (config: AxiosRequestConfig, category?: string) =>
    server.get<GoodsData[]>(
      `/goods?${category ? `category=${category}` : ''}`,
      config
    ),
  getGoods: (id: string) => server.get<GoodsData>(`/goods/${id}`),
};

export default goodsAPI;
