import * as React from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  selectCartAllChecked,
  toggleAllChecked,
} from '@store/slices/cartSlice';
import { styles } from './styles';

export default function CartAllCheckbox() {
  const checked = useAppSelector(selectCartAllChecked);

  const appDispatch = useAppDispatch();
  const onChange = () => {
    appDispatch(toggleAllChecked());
  };

  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span css={styles.cartAllCheckboxText}>전체 선택</span>
    </label>
  );
}
