import { useState } from 'react';
import useDetectElementOutside from './useDetectElementOutside';

const useDetectDropdown = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const toggleIsActive = () => {
    setIsActive(prev => !prev);
  };

  const setDropdownRef = useDetectElementOutside<HTMLButtonElement>(
    isActive,
    () => setIsActive(false)
  );

  return [isActive, toggleIsActive, setDropdownRef] as const;
};

export default useDetectDropdown;
