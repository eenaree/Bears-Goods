import * as React from 'react';
import ModalView from '@components/ModalView';
import { useModalDispatch } from '@context/ModalContext';
import { styles } from './styles';

interface Props {
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
}

export default function ConfirmModal({
  message,
  confirmText,
  cancelText,
  onConfirm,
}: Props) {
  const modalDispatch = useModalDispatch();
  const onCancel = () => {
    modalDispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <ModalView>
      <div css={styles.modalBody}>
        <p css={styles.modalMessage}>{message}</p>
        <div css={styles.modalActions}>
          <button onClick={onConfirm || onCancel}>
            {confirmText || '확인'}
          </button>
          <button onClick={onCancel}>{cancelText || '취소'}</button>
        </div>
      </div>
    </ModalView>
  );
}
