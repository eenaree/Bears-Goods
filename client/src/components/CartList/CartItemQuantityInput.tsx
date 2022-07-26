import * as React from 'react';
import { useState } from 'react';
import QuantityInput from '@components/QuantityInput';
import { useAppDispatch } from '@store/hooks';
import {
  changeItemQuantity,
  decrementItemQuantity,
  incrementItemQuantity,
} from '@store/slices/cartSlice';
import { GoodsOption } from '@typings/db';

interface Props {
  id: GoodsOption['id'];
  size: GoodsOption['size'];
  quantity: GoodsOption['quantity'];
}

export default function CartItemQuantityInput({ id, size, quantity }: Props) {
  const [value, setValue] = useState(quantity);
  const appDispatch = useAppDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (Number.isNaN(value)) return;

    setValue(value);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === '0') {
      alert('최소 구매 수량은 1개입니다.');
      setValue(quantity);
      return;
    }
    if (quantity === value) return;
    appDispatch(changeItemQuantity({ id, size, quantity: value }));
  };

  const onIncrement = () => {
    if (value === 20) {
      alert('최대 구매 가능 수량은 20개입니다.');
      return;
    }

    setValue(prev => prev + 1);
    appDispatch(incrementItemQuantity({ id, size }));
  };

  const onDecrement = () => {
    if (value === 1) {
      alert('최소 구매 수량은 1개입니다.');
      return;
    }

    setValue(prev => prev - 1);
    appDispatch(decrementItemQuantity({ id, size }));
  };

  return (
    <QuantityInput
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />
  );
}
