import { useEffect } from 'react';
import useElement from './useElement';

export default function useDetectElementOutside(
  active: boolean,
  inactiveFunction: () => void
) {
  const [elementRef, setElementRef] = useElement();

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
  }, [active, inactiveFunction, elementRef]);

  return setElementRef;
}
