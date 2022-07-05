import * as React from 'react';
import { useState } from 'react';
import {
  AiOutlineCloseSquare,
  AiOutlineMinus,
  AiOutlinePlus,
} from 'react-icons/ai';
import useDelayUnmount from '@hooks/useDelayUnmount';
import { addThousandSeperatorToNumber } from '@lib/utils';
import { OptionAction } from '@reducers/option';
import { Option } from '@typings/db';
import { Price, Wrapper } from './styles';

interface Prop {
  option: Option;
  dispatch: React.Dispatch<OptionAction>;
}

export default function SelectedOption({
  option,
  dispatch,
}: Prop): React.ReactElement {
  const [quantity, setQuantity] = useState<string>(String(option.quantity));
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) return;
    if (parseInt(e.target.value) > 10) {
      alert('최대 구매 가능 수량은 10개입니다.');
      setQuantity('10');
      dispatch({
        type: 'CHANGE_OPTION_QUANTITY',
        size: option.size,
        quantity: 10,
      });
      return;
    }

    setQuantity(e.target.value);
    const value: number = parseInt(e.target.value);
    if (value) {
      if (value === option.quantity) return;
      dispatch({
        type: 'CHANGE_OPTION_QUANTITY',
        size: option.size,
        quantity: value,
      });
    }
  };

  const handleQuantityBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setQuantity(String(option.quantity));
      return;
    }

    if (e.target.value.startsWith(' ') || e.target.value.startsWith('0')) {
      const value: number = parseInt(e.target.value);
      if (!value) {
        setQuantity(String(option.quantity));
      } else {
        setQuantity(String(value));
      }
    }
  };

  const handleQuantityIncrement = () => {
    if (option.quantity === 10) return;
    setQuantity(prev => String(parseInt(prev) + 1));
    dispatch({
      type: 'INCREMENT_OPTION_QUANTITY',
      size: option.size,
      price: option.price,
    });
  };

  const handleQuantityDecrement = () => {
    if (option.quantity === 1) return;
    setQuantity(prev => String(parseInt(prev) - 1));
    dispatch({
      type: 'DECREMENT_OPTION_QUANTITY',
      size: option.size,
      price: option.price,
    });
  };

  const [isMounted, setIsMounted] = useDelayUnmount(handleOptionRemove, 500);
  function handleOptionRemove() {
    dispatch({ type: 'REMOVE_OPTION', option });
  }
  function handleDelayUnmount() {
    setIsMounted(false);
  }

  return (
    <Wrapper isMounted={isMounted}>
      <div>Size: {option.size}</div>
      <div>
        <button onClick={handleQuantityDecrement}>
          <AiOutlineMinus />
        </button>
        <input
          value={quantity}
          onChange={handleQuantityChange}
          onBlur={handleQuantityBlur}
        />
        <button onClick={handleQuantityIncrement}>
          <AiOutlinePlus />
        </button>
      </div>
      <Price>
        {addThousandSeperatorToNumber(option.price * option.quantity)}원
      </Price>
      <button onClick={handleDelayUnmount}>
        <AiOutlineCloseSquare size="1.8rem" color="#666" />
      </button>
    </Wrapper>
  );
}
