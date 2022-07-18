import * as React from 'react';
import { useEffect } from 'react';
import { styles } from './styles';

interface Props {
  children: React.ReactChild | React.ReactChild[];
}

export default function ModalView({ children }: Props): React.ReactElement {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <div css={styles.modalContainer}>
      <div css={styles.modalView}>{children}</div>
    </div>
  );
}
