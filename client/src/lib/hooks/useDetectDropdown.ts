import { useEffect, useRef, useState } from 'react';

const useDetectDropdown = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const toggleIsActive = () => {
    setIsActive(prev => !prev);
  };

  const dropdownRef = useRef<HTMLButtonElement>();
  const setDropdownRef = (element: HTMLButtonElement) => {
    dropdownRef.current = element;
  };

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        e.target &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Element)
      ) {
        setIsActive(false);
      }
    };

    if (isActive) {
      window.addEventListener('click', onClickOutside);
    }

    return () => {
      window.removeEventListener('click', onClickOutside);
    };
  }, [isActive]);

  return [isActive, toggleIsActive, setDropdownRef] as const;
};

export default useDetectDropdown;
