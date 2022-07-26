import * as React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@store/hooks';
import { selectCartItemCount } from '@store/slices/cartSlice';
import { styles } from './styles';

export default function Header() {
  const cartItemCount = useAppSelector(selectCartItemCount);

  return (
    <header css={styles.headerZone}>
      <div css={styles.headerInner}>
        <h1 css={styles.headerLogo}>
          <Link to="/">Bears Goods</Link>
        </h1>
        <Link to="/goods_cart" css={styles.cartButton}>
          <AiOutlineShoppingCart size="3rem" />
          {cartItemCount > 0 && (
            <span css={styles.cartItemCount}>{cartItemCount}</span>
          )}
        </Link>
      </div>
    </header>
  );
}
