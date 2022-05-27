import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartButton, Logo, Container, Inner, CartItemCount } from './styles';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCartState } from '@context/CartContext';

export default function Header(): React.ReactElement {
  const { cart } = useCartState();
  const navigate = useNavigate();
  const handleCartCheck = () => {
    navigate('/goods_cart');
  };

  return (
    <Container>
      <Inner>
        <Logo>
          <Link to="/">Bears Goods</Link>
        </Logo>
        <CartButton onClick={handleCartCheck}>
          <AiOutlineShoppingCart size="2.8rem" />
          {cart.length > 0 && <CartItemCount>{cart.length}</CartItemCount>}
        </CartButton>
      </Inner>
    </Container>
  );
}
