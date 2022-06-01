import * as React from 'react';
import { PriceSortingZone } from './styles';

interface Props {
  order: string;
}

export default function PriceSorting({ order }: Props): React.ReactElement {
  return (
    <PriceSortingZone>
      <input
        type="radio"
        name="order"
        id="asc"
        value="asc"
        checked={order === 'asc'}
        readOnly
      />
      <label htmlFor="asc">낮은 가격순</label>
      <input
        type="radio"
        name="order"
        id="desc"
        value="desc"
        checked={order === 'desc'}
        readOnly
      />
      <label htmlFor="desc">높은 가격순</label>
      <input
        type="radio"
        name="order"
        id="default"
        value=""
        checked={order === ''}
        readOnly
      />
      <label htmlFor="default">기본순</label>
    </PriceSortingZone>
  );
}
