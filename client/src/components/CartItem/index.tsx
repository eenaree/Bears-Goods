import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartItemOption } from '@typings/db';
import {
  CartItemWrapper,
  DeleteButton,
  ItemImageWrapper,
  ItemInfo,
  Product,
  Price,
  Quantity,
  ItemCheckbox,
} from './styles';
import { CgTrash } from 'react-icons/cg';
import { addThousandSeperatorToNumber } from '@utils';
import { useCartDispatch } from '@context/CartContext';
import useDelayUnmount from '@hooks/useDelayUnmount';

interface Props {
  item: CartItemOption;
}

export default function CartItem({ item }: Props): React.ReactElement {
  const dispatch = useCartDispatch();
  const [quantity, setQuantity] = useState<number>(item.quantity);
  const handleItemQuantityChange = () => {
    if (item.quantity === quantity) return;
    dispatch({ type: 'CHANGE_CART_ITEM_QUANTITY', item, quantity });
  };

  const handleItemQuantityIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleItemQuantityDecrement = () => {
    if (quantity === 1) return;
    setQuantity(prev => prev - 1);
  };

  const [isMounted, setIsMounted] = useDelayUnmount(handleCartItemRemove, 500);
  function handleDelayUnmount() {
    setIsMounted(false);
  }
  function handleCartItemRemove() {
    dispatch({ type: 'REMOVE_CART_ITEM', item });
  }

  const handleCheckedChange = () => {
    dispatch({ type: 'TOGGLE_ITEM_SELECT', item });
  };

  return (
    <CartItemWrapper isMounted={isMounted}>
      <ItemCheckbox>
        <input
          type="checkbox"
          id="check"
          checked={item.selected}
          onChange={handleCheckedChange}
        />
        <label htmlFor="check">선택</label>
      </ItemCheckbox>
      <ItemImageWrapper>
        <Link to={`/goods/${item.id}`} title={item.name}>
          <img src={item.img} alt={item.name} />
        </Link>
      </ItemImageWrapper>
      <ItemInfo>
        <Product>
          <p>{item.name}</p>
          <p>Size: {item.size}</p>
        </Product>
        <Quantity>
          <button onClick={handleItemQuantityDecrement}>-</button>
          <input type="text" readOnly value={quantity} />
          <button onClick={handleItemQuantityIncrement}>+</button>
          <button onClick={handleItemQuantityChange}>변경</button>
        </Quantity>
        <Price>
          <strong>{addThousandSeperatorToNumber(item.price)}</strong> 원
        </Price>
      </ItemInfo>
      <DeleteButton onClick={handleDelayUnmount}>
        <CgTrash size="1.2rem" />
      </DeleteButton>
    </CartItemWrapper>
  );
}
