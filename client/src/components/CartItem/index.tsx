import * as React from 'react';
import { useState, useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import { CartItemOption } from '@typings/db';
import {
  Wrapper,
  DeleteButton,
  ImageWrapper,
  ItemInfo,
  Product,
  Price,
  checkboxStyle,
} from './styles';
import { CgTrash } from 'react-icons/cg';
import { addThousandSeperatorToNumber } from '@utils';
import { useCartDispatch } from '@context/CartContext';
import useDelayUnmount from '@hooks/useDelayUnmount';
import CheckBox from '@components/CheckBox';
import CartQuantityInput from '@components/CartQuantityInput';

interface Props {
  item: CartItemOption;
}

export default memo(function CartItem({ item }: Props): React.ReactElement {
  const dispatch = useCartDispatch();
  const [isMounted, setIsMounted] = useDelayUnmount(handleItemRemove, 500);
  function handleDelayUnmount() {
    setIsMounted(false);
  }
  function handleItemRemove() {
    dispatch({ type: 'REMOVE_CART_ITEM', item });
  }

  const handleItemSelectedToggle = () => {
    dispatch({ type: 'TOGGLE_ITEM_SELECT', item });
  };

  return (
    <Wrapper isMounted={isMounted}>
      <CheckBox
        id="check"
        checked={item.selected}
        onChange={handleItemSelectedToggle}
        css={checkboxStyle}
      />
      <ImageWrapper>
        <Link to={`/goods/${item.id}`} title={item.name}>
          <img src={item.img} alt={item.name} />
        </Link>
      </ImageWrapper>
      <ItemInfo>
        <Product>
          <p>{item.name}</p>
          <p>Size: {item.size}</p>
        </Product>
        <CartQuantityInput item={item} />
        <Price>
          <strong>
            {addThousandSeperatorToNumber(item.price * item.quantity)}
          </strong>
          <span> 원</span>
        </Price>
      </ItemInfo>
      <DeleteButton onClick={handleDelayUnmount}>
        <CgTrash size="2rem" />
      </DeleteButton>
    </Wrapper>
  );
});
