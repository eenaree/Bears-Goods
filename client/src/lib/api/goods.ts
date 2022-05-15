import { server } from '@api/default';
import { GoodsData } from '@typings/db';

const goodsAPI = {
  getGoodsList: () => server.get<GoodsData[]>('/goods'),
  getGoods: (id: string) => server.get<GoodsData>(`/goods/${id}`),
};

export default goodsAPI;
