import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { styles } from './styles';

interface Props {
  options: { label: string; value: string }[];
  selected: string;
  onChangeSelected: (value: string) => void;
}

export default function Dropdown({
  options,
  selected,
  onChangeSelected,
}: Props): React.ReactElement {
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

  return (
    <div css={styles.dropdownZone}>
      <button
        ref={setDropdownRef}
        onClick={toggleIsActive}
        css={styles.dropdownButton}
      >
        {selected}
      </button>
      <div css={styles.dropdownList(isActive)}>
        {options.map(option => (
          <button
            key={option.label}
            onClick={() => onChangeSelected(option.value)}
            css={
              option.label === selected
                ? styles.selectedOption
                : styles.notSelectedOption
            }
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
