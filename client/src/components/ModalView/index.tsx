import * as React from 'react';
import { useEffect } from 'react';
import { ModalContainer } from './styles';

interface Props {
  children: React.ReactElement;
  isMounted?: boolean;
}

export default function ModalView({
  children,
  isMounted,
}: Props): React.ReactElement {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return <ModalContainer isMounted={isMounted}>{children}</ModalContainer>;
}
