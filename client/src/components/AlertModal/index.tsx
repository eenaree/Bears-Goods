import * as React from 'react';
import ModalView from '@components/ModalView';
import { useModalDispatch } from '@context/ModalContext';
import { styles } from './styles';

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

export default function AlertModal({ children }: Props): React.ReactElement {
  const modalDispatch = useModalDispatch();

  const onClick = () => {
    modalDispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <ModalView>
      <div>
        <p css={styles.alertTitle}>알림메세지</p>
        <p css={styles.alertText}>{children}</p>
        <button type="button" css={styles.confirmButton} onClick={onClick}>
          확인
        </button>
      </div>
    </ModalView>
  );
}
