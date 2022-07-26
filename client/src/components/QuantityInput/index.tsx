import * as React from 'react';
import { styles } from './styles';

interface Props {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function QuantityInput({
  value,
  onIncrement,
  onDecrement,
  ...props
}: Props & React.ComponentPropsWithoutRef<'input'>) {
  return (
    <div>
      <button type="button" css={styles.buttonCommon} onClick={onDecrement}>
        <span css={styles.minus} />
      </button>
      <input type="text" css={styles.input} value={value} {...props} />
      <button type="button" css={styles.buttonCommon} onClick={onIncrement}>
        <span css={styles.plus} />
      </button>
    </div>
  );
}
