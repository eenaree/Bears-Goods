import { RefCallback, useRef } from 'react';

export default function useClientRect() {
  const rectRef = useRef<DOMRect>();
  const setRectRef: RefCallback<Element> = element => {
    if (element) {
      rectRef.current = element.getBoundingClientRect();
    }
  };

  return [rectRef, setRectRef] as const;
}
