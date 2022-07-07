import * as React from 'react';
import { createContext, useContext } from 'react';

interface GoodsContext {
  id: number;
  name: string;
  price: number;
  img: string;
}

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

const GoodsContext = createContext<GoodsContext | undefined>(undefined);

export default function GoodsProvider({
  children,
  ...props
}: Props & GoodsContext): React.ReactElement {
  const value = {
    id: props.id,
    name: props.name,
    price: props.price,
    img: props.img,
  };

  return (
    <GoodsContext.Provider value={value}>{children}</GoodsContext.Provider>
  );
}

export const useGoodsValue = () => {
  const state = useContext(GoodsContext);
  if (state === undefined) {
    throw new Error('GoodsContextProvider can not found');
  }
  return state;
};
