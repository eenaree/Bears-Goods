import * as React from 'react';
import { GoodsFilterContainer } from './styles';

interface Props {
  filter: string | null;
  onChangeFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function GoodsFilter({
  filter,
  onChangeFilter,
}: Props): React.ReactElement {
  return (
    <GoodsFilterContainer>
      <input
        type="radio"
        name="all"
        id="all"
        defaultValue="all"
        onChange={onChangeFilter}
        checked={filter == 'all'}
      />
      <label htmlFor="all">전체</label>
      <input
        type="radio"
        name="uniform"
        id="uniform"
        defaultValue="uniform"
        onChange={onChangeFilter}
        checked={filter == 'uniform'}
      />
      <label htmlFor="uniform">유니폼</label>
      <input
        type="radio"
        name="clothing"
        id="clothing"
        defaultValue="clothing"
        onChange={onChangeFilter}
        checked={filter == 'clothing'}
      />
      <label htmlFor="clothing">의류</label>
      <input
        type="radio"
        name="cap"
        id="cap"
        defaultValue="cap"
        onChange={onChangeFilter}
        checked={filter == 'cap'}
      />
      <label htmlFor="cap">모자</label>
    </GoodsFilterContainer>
  );
}
