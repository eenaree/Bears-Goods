import * as React from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  selectCartAllChecked,
  toggleAllChecked,
} from '@store/slices/cartSlice';

export default function CartAllCheckbox(): React.ReactElement {
  const checked = useAppSelector(selectCartAllChecked);

  const appDispatch = useAppDispatch();
  const onChange = () => {
    appDispatch(toggleAllChecked());
  };

  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>전체 선택</span>
    </label>
  );
}
