import { useEffect, useState } from 'react';

export default function useDelayUnmount(trigger: boolean, delay: number) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    let timeoutId: number;

    if (trigger && !isMounted) {
      setIsMounted(true);
    }

    if (!trigger && isMounted) {
      timeoutId = window.setTimeout(() => {
        setIsMounted(false);
      }, delay);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [trigger, isMounted, delay]);

  return isMounted;
}
