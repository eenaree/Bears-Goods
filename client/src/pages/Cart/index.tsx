import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '@components/CartItem';
import CartPriceBox from '@components/CartPriceBox';
import CheckBox from '@components/CheckBox';
import DeleteConfirmModal from '@components/DeleteConfirmModal';
import { useCartDispatch, useCartState } from '@context/CartContext';
import { CartItemOption } from '@typings/db';
import {
  ButtonGroup,
  CartItemList,
  Container,
  NoneCartList,
  SelectZone,
} from './styles';

export default function Cart(): React.ReactElement {
  const { cart } = useCartState();
  const dispatch = useCartDispatch();
  const renderCartItemList: React.ReactElement[] = cart.map(item => (
    <CartItem key={item.name + item.size} item={item} />
  ));

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const selectedCart = useMemo<CartItemOption[]>(
    () => cart.filter(item => item.selected),
    [cart]
  );

  const [modal, setModal] = useState<boolean>(false);
  const handleDeleteClick = () => {
    if (!selectedCart.length) {
      alert('선택된 상품이 없습니다. 삭제할 상품을 선택하세요.');
      return;
    }
    setModal(true);
  };

  const handleAllCheckedChange = () => {
    const allSelected = cart.length === selectedCart.length;
    dispatch({
      type: 'TOGGLE_ALL_SELECT',
      selected: !allSelected,
    });
  };

  return (
    <>
      <Container>
        <h2>장바구니</h2>
        {cart.length > 0 ? (
          <>
            <SelectZone>
              <CheckBox
                id="allCheckbox"
                checked={cart.length === selectedCart.length}
                onChange={handleAllCheckedChange}
                label={`전체 선택 (${selectedCart.length}/${cart.length})`}
              />
              <button onClick={handleDeleteClick}>선택 삭제</button>
            </SelectZone>
            <CartItemList>{renderCartItemList}</CartItemList>
            <CartPriceBox selectedCart={selectedCart} />
            <ButtonGroup>
              <Link to="/">목록으로</Link>
              <button>주문하기</button>
            </ButtonGroup>
          </>
        ) : (
          <NoneCartList>
            <p>장바구니에 담긴 상품이 없습니다.</p>
            <Link to="/">상품 구경하기</Link>
          </NoneCartList>
        )}
      </Container>
      {modal && <DeleteConfirmModal setModal={setModal} />}
    </>
  );
}
