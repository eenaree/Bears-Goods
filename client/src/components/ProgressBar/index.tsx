import * as React from 'react';
import { Bar, CreateBar } from './styles';

interface Props {
  isLoading: boolean;
}

export default function ProgressBar({ isLoading }: Props): React.ReactElement {
  return (
    <CreateBar isLoading={isLoading}>
      <Bar isLoading={isLoading}></Bar>
    </CreateBar>
  );
}
