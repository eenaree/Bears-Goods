import { RefCallback, useEffect, useRef } from 'react';

export default function useDetectElementOutside<T extends HTMLElement>(
  active: boolean,
  inactiveFunction: () => void
) {
  const elementRef = useRef<T>();
  const setElementRef: RefCallback<T> = (element: T) => {
    elementRef.current = element;
  };

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        e.target &&
        elementRef.current &&
        !elementRef.current.contains(e.target as Element)
      ) {
        inactiveFunction();
      }
    };

    if (active) {
      window.addEventListener('click', onClickOutside);
    }

    return () => {
      window.removeEventListener('click', onClickOutside);
    };
  }, [active, inactiveFunction]);

  return setElementRef;
}
