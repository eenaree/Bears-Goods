import * as React from 'react';
import { useOptionDispatch } from '@context/OptionContext';
import { addThousandSeperatorToNumber } from '@lib/utils';
import { GoodsOption } from '@typings/db';
import GoodsOptionQuantityInput from './GoodsOptionQuantityInput';
import { styles } from './styles';

interface Props {
  selectedRef: React.MutableRefObject<Set<string | number>>;
}

export default function SelectedOption({
  size,
  price,
  quantity,
  selectedRef,
}: GoodsOption & Props): React.ReactElement {
  const optionDispatch = useOptionDispatch();
  const onClick = () => {
    selectedRef.current.delete(size);
    optionDispatch({ type: 'REMOVE_OPTION', size });
  };

  return (
    <div css={styles.selectedOption}>
      <p css={styles.selectedOptionSize}>
        SIZE: <strong>{size}</strong>
      </p>
      <div css={styles.selectedOptionQuantity}>
        <GoodsOptionQuantityInput size={size} quantity={quantity} />
        <p>
          <strong>{addThousandSeperatorToNumber(price * quantity)}</strong> 원
        </p>
      </div>
      <button type="button" css={styles.closeButton} onClick={onClick}>
        <span />
      </button>
    </div>
  );
}
