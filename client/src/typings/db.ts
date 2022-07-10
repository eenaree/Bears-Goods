export interface CommonGoods {
  id: number;
  name: string;
  price: number;
  img: string;
}

export interface GoodsData extends CommonGoods {
  size: Array<string> | Array<number>;
  category: 'uniform' | 'clothing' | 'cap';
}

export type GoodsCategory = GoodsData['category'];

export interface GoodsOption extends CommonGoods {
  size: GoodsData['size'][number];
  quantity: number;
}

export interface CartItemOption extends GoodsOption {
  selected: boolean;
}
