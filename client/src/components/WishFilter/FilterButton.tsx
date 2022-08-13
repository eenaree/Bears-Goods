import * as React from 'react';
import { GoodsCategory } from '@typings/db';

interface Props {
  filter: GoodsCategory | 'all';
  filterCount: number;
}

const categories = {
  all: '전체',
  uniform: '유니폼',
  clothing: '의류',
  cap: '모자',
};

export default function FilterButton({ filter, filterCount }: Props) {
  return (
    <button>
      {categories[filter]}({filterCount})
    </button>
  );
}
