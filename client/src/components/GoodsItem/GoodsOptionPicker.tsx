import * as React from 'react';
import { useRef } from 'react';
import { useOption } from '@context/OptionContext';
import { GoodsData } from '@typings/db';
import GoodsOptionDropdown from './GoodsOptionDropdown';
import SelectedOption from './SelectedOption';
import { styles } from './styles';

interface Props {
  item: GoodsData;
}

export default function GoodsOptionPicker({ item }: Props): React.ReactElement {
  const option = useOption();
  const selectedRef = useRef(new Set(option.map(option => option.size)));

  return (
    <div css={styles.optionArea}>
      <GoodsOptionDropdown item={item} selectedRef={selectedRef} />
      <div>
        {option.map(option => (
          <SelectedOption
            key={option.size}
            selectedRef={selectedRef}
            {...option}
          />
        ))}
      </div>
    </div>
  );
}
