import * as React from 'react';
import { useEffect, useRef } from 'react';
import { useModal, useModalDispatch } from '@context/ModalContext';
import useDelayUnmount from '@hooks/useDelayUnmount';
import useDetectElementOutside from '@hooks/useDetectElementOutside';
import { styles } from './styles';

export default function ModalView({
  children,
}: React.PropsWithChildren<unknown>) {
  const modal = useModal();
  const isMounted = useDelayUnmount(modal, 500);
  const scrollBarWidthRef = useRef(
    window.innerWidth - document.body.clientWidth
  );

  const modalDispatch = useModalDispatch();
  const setModalRef = useDetectElementOutside(modal, () =>
    modalDispatch({ type: 'CLOSE_MODAL' })
  );

  useEffect(() => {
    if (isMounted) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidthRef.current}px`;
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '0px';
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
