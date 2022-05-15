import * as React from 'react';
import { SelectedOptionWrapper, Price } from './styles';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineCloseSquare,
} from 'react-icons/ai';
import { addThousandSeperatorToNumber } from '@utils';
import { Option } from '@typings/db';
import { OptionAction } from '@reducers/option';

interface Prop {
  option: Option;
  dispatch: React.Dispatch<OptionAction>;
}

export default function SelectedOption({
  option,
  dispatch,
}: Prop): React.ReactElement {
  const handleQuantityIncrement = () => {
    dispatch({
      type: 'INCREMENT_OPTION_QUANTITY',
      id: option.id,
      price: option.price,
    });
  };

  const handleQuantityDecrement = () => {
    if (option.quantity === 1) return;
    dispatch({
      type: 'DECREMENT_OPTION_QUANTITY',
      id: option.id,
      price: option.price,
    });
  };

  const handleOptionRemove = () => {
    dispatch({ type: 'REMOVE_OPTION', id: option.id });
  };

  return (
    <SelectedOptionWrapper>
      <div>Size: {option.size}</div>
      <div>
        <button onClick={handleQuantityDecrement}>
          <AiOutlineMinus />
        </button>
        <input value={option.quantity} readOnly />
        <button onClick={handleQuantityIncrement}>
          <AiOutlinePlus />
        </button>
      </div>
      <Price>
        {addThousandSeperatorToNumber(option.price * option.quantity)}원
      </Price>
      <button onClick={handleOptionRemove}>
        <AiOutlineCloseSquare size="1.2rem" color="#666" />
      </button>
    </SelectedOptionWrapper>
  );
}
