import * as React from 'react';
import { styles } from './styles';

interface Props {
  isLoading: boolean;
}

export default function ProgressBar({ isLoading }: Props): React.ReactElement {
  return (
    <div css={styles.wrapper(isLoading)}>
      <div css={styles.bar(isLoading)} />
    </div>
  );
}
