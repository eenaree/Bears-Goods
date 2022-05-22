import { useState, useEffect } from 'react';

const useDelayUnmount = (delayFn: () => void, delayTime: number) => {
  const [isMounted, setIsMounted] = useState<boolean>(true);

  useEffect(() => {
    let animationTimeoutId: number;
    if (!isMounted) {
      animationTimeoutId = window.setTimeout(delayFn, delayTime);
    }
    return () => {
      clearTimeout(animationTimeoutId);
    };
  }, [isMounted, delayFn, delayTime]);

  return [isMounted, setIsMounted] as const;
};

export default useDelayUnmount;
