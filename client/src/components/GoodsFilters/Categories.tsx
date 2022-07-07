import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import { GoodsCategory } from '@typings/db';
import { styles } from './styles';

const categoryOptions = [
  { label: '전체', value: '' },
  { label: '유니폼', value: 'uniform' },
  { label: '의류', value: 'clothing' },
  { label: '모자', value: 'cap' },
] as const;

export default function Categories(): React.ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = (searchParams.get('category') as GoodsCategory) || '';
  const onChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setSearchParams({});
    } else {
      setSearchParams({ category: e.target.value });
    }
  };

  return (
    <article css={styles.categoryZone}>
      {categoryOptions.map(option => (
        <span key={option.label} css={styles.category}>
          <input
            type="radio"
            name="category"
            id={option.label}
            value={option.value}
            checked={category === option.value}
            onChange={onChangeCategory}
            css={styles.categoryInput}
          />
          <label htmlFor={option.label} css={styles.categoryLabel}>
            {option.label}
          </label>
        </span>
      ))}
    </article>
  );
}
