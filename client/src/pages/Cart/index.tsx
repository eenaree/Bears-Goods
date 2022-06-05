import * as React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartDispatch, useCartState } from '@context/CartContext';
import CartItem from '@components/CartItem';
import { addThousandSeperatorToNumber } from '@utils';
import {
  CartItemList,
  Container,
  PriceBox,
  ButtonGroup,
  SelectZone,
  NoneCartList,
  ToolTipText,
} from './styles';
import DeleteConfirmModal from '@components/DeleteConfirmModal';
import { CartItemOption } from '@typings/db';
import { FcAbout } from 'react-icons/fc';

export default function Cart(): React.ReactElement {
  const { cart, allSelected } = useCartState();
  const dispatch = useCartDispatch();
  const renderCartItemList: React.ReactElement[] = cart.map(item => (
    <CartItem key={item.name + item.size} item={item} />
  ));

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const [modal, setModal] = useState<boolean>(false);
  const selectedCartItem = useMemo<CartItemOption[]>(
    () => cart.filter(item => item.selected),
    [cart]
  );
  const selectedCartItemPrice = useMemo(
    () =>
      selectedCartItem.reduce(
        (prev, curr) => prev + curr.quantity * curr.price,
        0
      ),
    [selectedCartItem]
  );
  const handleDeleteClick = () => {
    if (!selectedCartItem.length) {
      alert('선택된 상품이 없습니다. 삭제할 상품을 선택하세요.');
      return;
    }
    setModal(true);
  };

  const handleAllCheckedChange = () => {
    dispatch({ type: 'TOGGLE_ALL_SELECT' });
  };

  const navigate = useNavigate();
  const handleListNavigate = () => {
    navigate('/');
  };

  return (
    <>
      <Container>
        <h2>장바구니</h2>
        {cart.length > 0 ? (
          <>
            <SelectZone>
              <span>
                <input
                  type="checkbox"
                  id="allCheck"
                  checked={allSelected}
                  onChange={handleAllCheckedChange}
                />
                <label htmlFor="allCheck">
                  전체 선택 ({selectedCartItem.length}/{cart.length})
                </label>
              </span>
              <button onClick={handleDeleteClick}>선택 삭제</button>
            </SelectZone>
            <CartItemList>{renderCartItemList}</CartItemList>
            <PriceBox>
              <p>
                <span>주문금액</span>
                <span>
                  {addThousandSeperatorToNumber(selectedCartItemPrice)}
                  &nbsp;원
                </span>
              </p>
              <p>
                <span>
                  배송비
                  <FcAbout />
                  <ToolTipText>5만원 이상 구매시 무료배송</ToolTipText>
                </span>
                <span>
                  {selectedCartItem.length > 0 && selectedCartItemPrice < 50000
                    ? addThousandSeperatorToNumber(3000)
                    : 0}
                  &nbsp;원
                </span>
              </p>
              <hr />
              <p>
                <span>총 주문금액</span>
                <span>
                  <strong>
                    {selectedCartItem.length > 0 &&
                    selectedCartItemPrice < 50000
                      ? addThousandSeperatorToNumber(
                          selectedCartItemPrice + 3000
                        )
                      : addThousandSeperatorToNumber(selectedCartItemPrice)}
                  </strong>
                  &nbsp;원
                </span>
              </p>
            </PriceBox>
            <ButtonGroup>
              <button onClick={handleListNavigate}>목록으로</button>
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
