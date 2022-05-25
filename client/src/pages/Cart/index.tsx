import * as React from 'react';
import { useEffect, useState } from 'react';
import { useCartDispatch, useCartState } from '@context/CartContext';
import CartItem from '@components/CartItem';
import { addThousandSeperatorToNumber } from '@utils';
import {
  CartItemList,
  Container,
  TotalPrice,
  ButtonWrapper,
  CartItemAllCheckbox,
} from './styles';
import DeleteConfirmModal from '@components/DeleteConfirmModal';

export default function Cart(): React.ReactElement {
  const { cart, cartTotalPrice, allSelected } = useCartState();
  const dispatch = useCartDispatch();
  const renderCartItemList: React.ReactElement[] = cart.map(item => (
    <CartItem key={item.name + item.size} item={item} />
  ));

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const [modal, setModal] = useState<boolean>(false);
  const handleDeleteClick = () => {
    setModal(true);
  };

  const handleAllCheckedChange = () => {
    dispatch({ type: 'TOGGLE_ALL_SELECT' });
  };

  return (
    <>
      <Container>
        <h2>장바구니</h2>
        <CartItemAllCheckbox>
          <input
            type="checkbox"
            id="allCheck"
            checked={allSelected}
            onChange={handleAllCheckedChange}
          />
          <label htmlFor="allCheck">전체 선택</label>
        </CartItemAllCheckbox>
        <CartItemList>{renderCartItemList}</CartItemList>
        <TotalPrice>
          <span>총 주문금액</span>
          <span>
            <strong>{addThousandSeperatorToNumber(cartTotalPrice)}</strong> 원
          </span>
        </TotalPrice>
        <ButtonWrapper>
          <button onClick={handleDeleteClick}>전체 삭제</button>
          <button>주문하기</button>
        </ButtonWrapper>
      </Container>
      {modal && <DeleteConfirmModal setModal={setModal} />}
    </>
  );
}
