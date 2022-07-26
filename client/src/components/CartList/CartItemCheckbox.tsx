import * as React from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  selectCartItemChecked,
  toggleItemChecked,
} from '@store/slices/cartSlice';

interface Props {
  itemIndex: string;
}

export default function CartItemCheckbox({ itemIndex }: Props) {
  const checked = useAppSelector(state =>
    selectCartItemChecked(state, itemIndex)
  );

  const appDispatch = useAppDispatch();

  const onChange = () => {
    appDispatch(toggleItemChecked(itemIndex));
  };

  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
    </label>
  );
}
