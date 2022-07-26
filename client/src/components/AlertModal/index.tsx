import * as React from 'react';
import ModalView from '@components/ModalView';
import { useModalDispatch } from '@context/ModalContext';
import { styles } from './styles';

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

export default function AlertModal({ children }: Props) {
  const modalDispatch = useModalDispatch();

  const onClick = () => {
    modalDispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <ModalView>
      <div css={styles.modalBody}>
        <p css={styles.modalTitle}>알림메세지</p>
        <div css={styles.modalMessage}>{children}</div>
        <button type="button" css={styles.confirmButton} onClick={onClick}>
          확인
        </button>
      </div>
    </ModalView>
  );
}
