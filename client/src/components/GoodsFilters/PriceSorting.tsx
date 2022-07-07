import * as React from 'react';
import Dropdown from '@components/Dropdown';
import { styles } from './styles';

interface Props {
  sortBy: string;
  onChangeSortBy: (value: string) => void;
}

const priceOptions = [
  { label: '낮은 가격순', value: 'asc' },
  { label: '높은 가격순', value: 'desc' },
  { label: '기본순', value: '' },
];

export default function PriceSorting({
  sortBy,
  onChangeSortBy,
}: Props): React.ReactElement {
  const selected =
    priceOptions.find(option => option.value === sortBy)?.label || '기본순';

  return (
    <article css={styles.priceSortingZone}>
      <Dropdown
        options={priceOptions}
        selected={selected}
        onChangeSelected={onChangeSortBy}
      />
    </article>
  );
}
