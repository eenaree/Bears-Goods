import * as React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ModalView from '@components/ModalView';
import { useModal } from '@context/ModalContext';
import { useOptionDispatch } from '@context/OptionContext';
import { styles } from './styles';

interface Props {
  selectedRef: React.MutableRefObject<Set<string | number>>;
}

export default function CheckCartModal({ selectedRef }: Props) {
  const modal = useModal();
  const optionDispatch = useOptionDispatch();

  useEffect(() => {
    if (!modal) {
      optionDispatch({ type: 'RESET_OPTION' });
      selectedRef.current.clear();
    }
  }, [modal]);

  return (
    <ModalView>
      <div css={styles.modalBody}>
        <p css={styles.modalMessage}>장바구니에 상품을 담았습니다.</p>
        <Link to="/goods_cart" css={styles.confirmButton}>
          장바구니 이동
        </Link>
      </div>
    </ModalView>
  );
}
