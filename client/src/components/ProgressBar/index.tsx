import * as React from 'react';
import { useState, useEffect } from 'react';
import { Bar, CreateBar } from './styles';

interface Props {
  isLoading: boolean;
}

export default function ProgressBar({ isLoading }: Props): React.ReactElement {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: number;
    if (isLoading) {
      setIsMounted(true);
    } else {
      timeoutId = window.setTimeout(() => {
        setIsMounted(false);
      }, 500);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isLoading]);

  return (
    <CreateBar isMounted={isMounted}>
      <Bar isLoading={isLoading}></Bar>
    </CreateBar>
  );
}
