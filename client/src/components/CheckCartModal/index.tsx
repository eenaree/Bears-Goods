import * as React from 'react';
import { Link } from 'react-router-dom';
import ModalView from '@components/ModalView';
import { styles } from './styles';

export default function CheckCartModal(): React.ReactElement {
  return (
    <ModalView>
      <div>
        <p css={styles.message}>장바구니에 상품을 담았습니다.</p>
        <Link to="/goods_cart" css={styles.confirmButton}>
          장바구니 이동
        </Link>
      </div>
    </ModalView>
  );
}
