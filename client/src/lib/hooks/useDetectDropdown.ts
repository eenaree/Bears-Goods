import { useState } from 'react';
import useDetectElementOutside from './useDetectElementOutside';

export default function useDetectDropdown() {
  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = () => {
    setIsActive(prev => !prev);
  };

  const setDropdownRef = useDetectElementOutside<HTMLButtonElement>(
    isActive,
    () => setIsActive(false)
  );

  return [isActive, toggleIsActive, setDropdownRef] as const;
}
