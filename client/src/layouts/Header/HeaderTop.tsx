import * as React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { RiHeartAddLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@store/hooks';
import { selectCartItemCount } from '@store/slices/cartSlice';
import { styles } from './styles';

export default function HeaderTop() {
  const cartItemCount = useAppSelector(selectCartItemCount);

  return (
    <div css={styles.headerTop}>
      <div css={styles.headerInner}>
        <ul css={styles.headerTopButtons}>
          <li>
            <Link to="/goods_wish">
              <RiHeartAddLine />
            </Link>
          </li>
          <li>
            <Link to="/goods_cart">
              <AiOutlineShoppingCart />
              {cartItemCount > 0 && (
                <span css={styles.cartItemCount}>{cartItemCount}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
