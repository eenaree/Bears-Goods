import * as React from 'react';
import { useModalDispatch } from '@context/ModalContext';
import { styles } from './styles';

export default function DeleteAction() {
  const modalDispatch = useModalDispatch();

  const onClick = () => {
    modalDispatch({ type: 'OPEN_MODAL' });
  };

  return (
    <button onClick={onClick} css={styles.cartActionButton}>
      선택 삭제
    </button>
  );
}
