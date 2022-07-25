import * as React from 'react';
import { useAppSelector } from '@store/hooks';
import { selectCart } from '@store/slices/cartSlice';
import CartItem from './CartItem';
import { styles } from './styles';

export default function CartList(): React.ReactElement {
  const cart = useAppSelector(selectCart);

  return (
    <section>
      <ul css={styles.cartItemWrapper}>
        {cart.map(cartItem => (
          <CartItem
            key={`${cartItem.id}+${cartItem.size}`}
            id={cartItem.id}
            size={cartItem.size}
          />
        ))}
      </ul>
    </section>
  );
}
