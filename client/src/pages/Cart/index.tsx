import * as React from 'react';
import { useEffect, useState } from 'react';
import { useCartState } from '@context/CartContext';
import CartItem from '@components/CartItem';
import { addThousandSeperatorToNumber } from '@utils';
import { CartItemList, Container, TotalPrice, ButtonWrapper } from './styles';
import DeleteConfirmModal from '@components/DeleteConfirmModal';

export default function Cart(): React.ReactElement {
  const { cart, cartTotalPrice } = useCartState();
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

  return (
    <>
      <Container>
        <h2>장바구니</h2>
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
