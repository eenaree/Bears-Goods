import * as React from 'react';
import useDetectDropdown from '@hooks/useDetectDropdown';
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
}: Props) {
  const [isActive, toggleIsActive, setDropdownRef] = useDetectDropdown();

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
