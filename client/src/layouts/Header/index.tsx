import * as React from 'react';
import { Link } from 'react-router-dom';
import { CartButton, Logo, Container, Inner, CartItemCount } from './styles';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCartState } from '@context/CartContext';

export default function Header(): React.ReactElement {
  const { cart } = useCartState();
  return (
    <Container>
      <Inner>
        <Logo>
          <Link to="/">Bears Goods</Link>
        </Logo>
        <CartButton>
          <AiOutlineShoppingCart size="1.7rem" />
          {cart.length > 0 && <CartItemCount>{cart.length}</CartItemCount>}
        </CartButton>
      </Inner>
    </Container>
  );
}
