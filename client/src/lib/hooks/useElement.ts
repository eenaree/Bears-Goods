import { RefCallback, useRef } from 'react';

export default function useElement<T extends Element>() {
  const elementRef = useRef<T>();
  const setElementRef: RefCallback<T> = element => {
    if (element) {
      elementRef.current = element;
    }
  };

  return [elementRef, setElementRef] as const;
}
