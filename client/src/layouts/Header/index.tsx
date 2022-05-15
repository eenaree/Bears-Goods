import * as React from 'react';
import { Link } from 'react-router-dom';
import { CartButton, Logo, Container, Inner } from './styles';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function Header(): React.ReactElement {
  return (
    <Container>
      <Inner>
        <Logo>
          <Link to="/">Bears Goods</Link>
        </Logo>
        <CartButton>
          <AiOutlineShoppingCart size="1.7rem" />
        </CartButton>
      </Inner>
    </Container>
  );
}
