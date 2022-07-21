import * as React from 'react';
import { useEffect } from 'react';
import { useModal, useModalDispatch } from '@context/ModalContext';
import useDelayUnmount from '@hooks/useDelayUnmount';
import useDetectElementOutside from '@hooks/useDetectElementOutside';
import { styles } from './styles';

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

export default function ModalView({
  children,
}: Props): React.ReactElement | null {
  const modal = useModal();
  const isMounted = useDelayUnmount(modal, 500);

  const modalDispatch = useModalDispatch();
  const setModalRef = useDetectElementOutside<HTMLDivElement>(modal, () =>
    modalDispatch({ type: 'CLOSE_MODAL' })
  );

  useEffect(() => {
    if (isMounted) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div css={styles.modalContainer(modal)}>
      <div ref={setModalRef} css={styles.modalView(modal)}>
        {children}
      </div>
    </div>
  );
}
