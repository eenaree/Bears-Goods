import * as React from 'react';
import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { CartItemOption } from '@typings/db';
import {
  Wrapper,
  DeleteButton,
  ImageWrapper,
  ItemInfo,
  Product,
  Price,
  Quantity,
  checkboxStyle,
} from './styles';
import { CgTrash } from 'react-icons/cg';
import { addThousandSeperatorToNumber } from '@utils';
import { useCartDispatch } from '@context/CartContext';
import useDelayUnmount from '@hooks/useDelayUnmount';
import CheckBox from '@components/CheckBox';

interface Props {
  item: CartItemOption;
}

export default function CartItem({ item }: Props): React.ReactElement {
  const dispatch = useCartDispatch();
  const [quantity, setQuantity] = useState<string>(String(item.quantity));
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
    if (parseInt(quantity) === 10) return;
    setQuantity(prev => String(parseInt(prev) + 1));
  };

  const handleItemQuantityDecrement = () => {
    if (parseInt(quantity) === 1) return;
    setQuantity(prev => String(parseInt(prev) - 1));
  };

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
        <Quantity>
          <button onClick={handleItemQuantityDecrement}>-</button>
          <input
            type="text"
            value={quantity}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button onClick={handleItemQuantityIncrement}>+</button>
          <button onClick={handleItemQuantityChange}>변경</button>
        </Quantity>
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
}
