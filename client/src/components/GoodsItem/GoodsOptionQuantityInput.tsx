import * as React from 'react';
import { useState } from 'react';
import QuantityInput from '@components/QuantityInput';
import { useOptionDispatch } from '@context/OptionContext';
import { GoodsOption } from '@typings/db';

interface Props {
  size: GoodsOption['size'];
  quantity: GoodsOption['quantity'];
}

export default function GoodsOptionQuantityInput({ size, quantity }: Props) {
  const optionDispatch = useOptionDispatch();
  const [value, setValue] = useState(quantity);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (Number.isNaN(value)) return;
    setValue(value);
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '0') {
      alert('최소 구매 수량은 1개입니다.');
      setValue(quantity);
      return;
    }
    if (quantity === value) return;
    optionDispatch({ type: 'CHANGE_OPTION_QUANTITY', size, quantity: value });
  };

  const incrementValue = () => {
    if (value === 20) {
      alert('최대 구매 가능 수량은 20개입니다.');
      return;
    }
    setValue(prev => prev + 1);
    optionDispatch({ type: 'INCREMENT_OPTION_QUANTITY', size });
  };

  const decrementValue = () => {
    if (value === 1) {
      alert('최소 구매 수량은 1개 입니다.');
      return;
    }
    setValue(prev => prev - 1);
    optionDispatch({ type: 'DECREMENT_OPTION_QUANTITY', size });
  };

  return (
    <QuantityInput
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onIncrement={incrementValue}
      onDecrement={decrementValue}
    />
  );
}
