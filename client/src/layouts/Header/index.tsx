import * as React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useCartListCount } from '@context/CartContext';
import { CartButton, CartItemCount, Container, Inner, Logo } from './styles';

export default function Header(): React.ReactElement {
  const cartListCount = useCartListCount();
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
          {cartListCount > 0 && <CartItemCount>{cartListCount}</CartItemCount>}
        </CartButton>
      </Inner>
    </Container>
  );
}
