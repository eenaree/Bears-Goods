import * as React from 'react';
import { useState, useCallback } from 'react';
import { CartItemOption } from '@typings/db';
import { useCartDispatch } from '@context/CartContext';
import { Button, ChangeButton, Wrapper } from './styles';

interface Props {
  item: CartItemOption;
}

export default function CartQuantityInput({ item }: Props): React.ReactElement {
  const dispatch = useCartDispatch();
  const [quantity, setQuantity] = useState<string>(String(item.quantity));

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === ' ') {
        e.preventDefault();
      }
    },
    []
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) return;
    if (parseInt(e.target.value) > 10) {
      setQuantity('10');
      alert('최대 구매 가능 수량은 10개입니다.');
      return;
    }
    setQuantity(e.target.value);
  }, []);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setQuantity(String(item.quantity));
      return;
    }
    if (e.target.value.startsWith(' ') || e.target.value.startsWith('0')) {
      const value = parseInt(e.target.value);
      if (!value) {
        setQuantity(String(item.quantity));
      } else {
        setQuantity(String(value));
      }
    }
  };

  const handleItemQuantityChange = () => {
    if (item.quantity === parseInt(quantity)) return;
    dispatch({
      type: 'CHANGE_CART_ITEM_QUANTITY',
      item,
      quantity: parseInt(quantity),
    });
  };

  const handleItemQuantityIncrement = () => {
    if (parseInt(quantity) === 10) {
      alert('최대 구매 가능 수량은 10개입니다.');
      return;
    }
    setQuantity(prev => String(parseInt(prev) + 1));
  };

  const handleItemQuantityDecrement = () => {
    if (parseInt(quantity) === 1) return;
    setQuantity(prev => String(parseInt(prev) - 1));
  };

  return (
    <Wrapper>
      <Button onClick={handleItemQuantityDecrement} disabled={quantity === '1'}>
        -
      </Button>
      <input
        type="text"
        value={quantity}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Button
        onClick={handleItemQuantityIncrement}
        disabled={quantity === '10'}
      >
        +
      </Button>
      <ChangeButton
        onClick={handleItemQuantityChange}
        disabled={parseInt(quantity) === item.quantity}
      >
        변경
      </ChangeButton>
    </Wrapper>
  );
}
