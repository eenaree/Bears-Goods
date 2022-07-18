import * as React from 'react';
import { useEffect, useState } from 'react';
import { useModal, useModalDispatch } from '@context/ModalContext';
import useDetectElementOutside from '@hooks/useDetectElementOutside';
import { styles } from './styles';

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

export default function ModalView({
  children,
}: Props): React.ReactElement | null {
  const modal = useModal();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const modalDispatch = useModalDispatch();
  const setModalRef = useDetectElementOutside<HTMLDivElement>(modal, () =>
    modalDispatch({ type: 'CLOSE_MODAL' })
  );

  useEffect(() => {
    let timeoutId: number;

    if (modal && !isMounted) {
      setIsMounted(true);
    }
    if (!modal && isMounted) {
      timeoutId = window.setTimeout(() => {
        setIsMounted(false);
      }, 500);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [modal, isMounted]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div css={styles.modalContainer(modal)}>
      <div ref={setModalRef} css={styles.modalView(modal)}>
        {children}
      </div>
    </div>
  );
}
