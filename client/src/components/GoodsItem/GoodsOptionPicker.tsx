import * as React from 'react';
import { GoodsData } from '@typings/db';
import GoodsOptionDropdown from './GoodsOptionDropdown';
import { styles } from './styles';

interface Props {
  item: GoodsData;
}

export default function GoodsOptionPicker({ item }: Props): React.ReactElement {
  return (
    <div css={styles.optionArea}>
      <GoodsOptionDropdown item={item} />
    </div>
  );
}
