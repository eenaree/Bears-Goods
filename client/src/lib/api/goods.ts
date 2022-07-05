import { AxiosRequestConfig } from 'axios';
import { server } from '@api/default';
import { GoodsData } from '@typings/db';

const goodsAPI = {
  getGoodsList: (
    config: AxiosRequestConfig,
    category?: string | null,
    sort?: string | null,
    order?: string | null
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
