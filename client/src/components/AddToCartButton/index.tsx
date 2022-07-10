import * as React from 'react';
import { useEffect } from 'react';
import { useCartDispatch, useCartState } from '@context/CartContext';
import { CartItemOption, GoodsOption } from '@typings/db';
import { Button } from './styles';

interface Props {
  options: GoodsOption[];
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddToCartButton({
  options,
  setModal,
}: Props): React.ReactElement {
  const { cart } = useCartState();
  const dispatch = useCartDispatch();

  const handleCartItemAdd = () => {
    if (options.length === 0) {
      alert('선택한 옵션이 없습니다.');
      return;
    }
    const items: CartItemOption[] = options.map(option => ({
      ...option,
      selected: true,
    }));
    dispatch({ type: 'ADD_CART_ITEM', items });
    setModal(true);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return <Button onClick={handleCartItemAdd}>장바구니 추가</Button>;
}
