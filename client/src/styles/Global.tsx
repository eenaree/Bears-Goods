import * as React from 'react';
import { Global } from '@emotion/react';
import reset from './reset';

export default function GlobalStyles(): React.ReactElement {
  return <Global styles={reset} />;
}
