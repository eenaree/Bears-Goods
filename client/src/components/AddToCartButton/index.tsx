import * as React from 'react';
import { useEffect } from 'react';
import { useCartDispatch, useCartState } from '@context/CartContext';
import { Option } from '@typings/db';
import { Button } from './styles';

interface Props {
  options: Option[];
}

export default function AddToCartButton({
  options,
}: Props): React.ReactElement {
  const { cart } = useCartState();
  const dispatch = useCartDispatch();

  const handleCartItemAdd = () => {
    if (options.length === 0) {
      alert('선택한 옵션이 없습니다.');
      return;
    }
    dispatch({ type: 'ADD_CART_ITEM', options });
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return <Button onClick={handleCartItemAdd}>장바구니 추가</Button>;
}
