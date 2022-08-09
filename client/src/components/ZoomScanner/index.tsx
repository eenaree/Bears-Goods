import * as React from 'react';
import { styles } from './styles';

interface Position {
  left: number;
  top: number;
}

interface ElementOffset {
  width: number;
  height: number;
}

interface Props {
  position: Position;
  elementOffset: ElementOffset;
}

export default function ZoomScanner({ position, elementOffset }: Props) {
  return (
    <span
      css={styles.zoomScanner({
        left: position.left.toFixed(),
        top: position.top.toFixed(),
        width: elementOffset.width.toFixed(),
        height: elementOffset.height.toFixed(),
      })}
    />
  );
}
