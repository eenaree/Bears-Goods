import * as React from 'react';
import { createContext, useContext } from 'react';
import { GoodsData } from '@typings/db';

interface Props {
  children: React.ReactElement | React.ReactElement[];
  goods: GoodsData;
}

const GoodsContext = createContext<Omit<GoodsData, 'category'> | undefined>(
  undefined
);

export default function GoodsProvider({
  children,
  goods,
}: Props): React.ReactElement {
  return (
    <GoodsContext.Provider value={goods}>{children}</GoodsContext.Provider>
  );
}

export const useGoodsValue = () => {
  const state = useContext(GoodsContext);
  if (state === undefined) {
    throw new Error('GoodsContextProvider can not found');
  }
  return state;
};
