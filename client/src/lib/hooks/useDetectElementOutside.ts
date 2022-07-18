import { useEffect, useRef } from 'react';

export default function useDetectElementOutside<T extends HTMLElement>(
  isActive: boolean,
  disableFunction: () => void
) {
  const elementRef = useRef<T>();
  const setElementRef = (element: T) => {
    elementRef.current = element;
  };

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        e.target &&
        elementRef.current &&
        !elementRef.current.contains(e.target as Element)
      ) {
        disableFunction();
      }
    };

    if (isActive) {
      window.addEventListener('click', onClickOutside);
    }

    return () => {
      window.removeEventListener('click', onClickOutside);
    };
  }, [isActive, disableFunction]);

  return setElementRef;
}
