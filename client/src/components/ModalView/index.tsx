import * as React from 'react';
import { useEffect, useState } from 'react';
import { useModal } from '@context/ModalContext';
import { styles } from './styles';

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

export default function ModalView({
  children,
}: Props): React.ReactElement | null {
  const modal = useModal();
  const [isMounted, setIsMounted] = useState<boolean>(false);

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
      <div css={styles.modalView(modal)}>{children}</div>
    </div>
  );
}
