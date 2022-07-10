import * as React from 'react';
import { useLoader } from '@context/LoaderContext';
import { styles } from './styles';

export default function ProgressBar(): React.ReactElement {
  const isLoading = useLoader();
  return (
    <div css={styles.wrapper(isLoading)}>
      <div css={styles.bar(isLoading)} />
    </div>
  );
}
