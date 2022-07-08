import * as React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useCartListCount } from '@context/CartContext';
import { styles } from './styles';

export default function Header(): React.ReactElement {
  const cartListCount = useCartListCount();
  const navigate = useNavigate();
  const handleCartCheck = () => {
    navigate('/goods_cart');
  };

  return (
    <header css={styles.headerZone}>
      <div css={styles.headerInner}>
        <h1 css={styles.headerLogo}>
          <Link to="/">Bears Goods</Link>
        </h1>
        <button css={styles.cartButton} onClick={handleCartCheck}>
          <AiOutlineShoppingCart size="2.8rem" />
          {cartListCount > 0 && (
            <span css={styles.cartItemCount}>{cartListCount}</span>
          )}
        </button>
      </div>
    </header>
  );
}
