import { server } from '@api/default';
import { GoodsData } from '@typings/db';
import { AxiosRequestConfig } from 'axios';

interface GoodsListParams {
  category?: string | null;
  sort?: string | null;
  order?: string | null;
}

const goodsAPI = {
  getGoodsList: (
    { category, sort, order }: GoodsListParams,
    config?: AxiosRequestConfig
  ) =>
    server.get<GoodsData[]>(
      `/goods?${category ? `category=${category}` : ''}${
        sort ? `&_sort=${sort}` : ''
      }${order ? `&_order=${order}` : ''}`,
      config
    ),
  getGoods: (id: string) => server.get<GoodsData>(`/goods/${id}`),
};

export default goodsAPI;
