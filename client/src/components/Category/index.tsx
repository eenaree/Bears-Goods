import * as React from 'react';
import { CategoryArea } from './styles';

interface Props {
  category: string;
}

export default function Category({ category }: Props): React.ReactElement {
  return (
    <CategoryArea>
      <input
        type="radio"
        name="category"
        id="all"
        value=""
        checked={category === ''}
        readOnly
      />
      <label htmlFor="all">전체</label>
      <input
        type="radio"
        name="category"
        id="uniform"
        value="uniform"
        checked={category === 'uniform'}
        readOnly
      />
      <label htmlFor="uniform">유니폼</label>
      <input
        type="radio"
        name="category"
        id="clothing"
        value="clothing"
        checked={category === 'clothing'}
        readOnly
      />
      <label htmlFor="clothing">의류</label>
      <input
        type="radio"
        name="category"
        id="cap"
        value="cap"
        checked={category === 'cap'}
        readOnly
      />
      <label htmlFor="cap">모자</label>
    </CategoryArea>
  );
}
