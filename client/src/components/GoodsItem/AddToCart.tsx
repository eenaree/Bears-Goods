import * as React from 'react';
import { useOption } from '@context/OptionContext';
import { styles } from './styles';

export default function AddToCart(): React.ReactElement {
  const option = useOption();

  return (
    <button css={styles.cartButton} disabled={option.length === 0}>
      장바구니 추가
    </button>
  );
}
