import * as React from 'react';
import { styles } from './styles';

interface Position {
  left: number;
  top: number;
}

interface ElementOffset extends Position {
  width: number;
  height: number;
}

interface Props {
  img: string;
  position: Position;
  elementOffset: ElementOffset;
}

export default function ZoomView({ img, position, elementOffset }: Props) {
  return (
    <div
      css={styles.viewContainer({
        left: elementOffset.left.toFixed(),
        top: elementOffset.top.toFixed(),
        width: elementOffset.width.toFixed(),
        height: elementOffset.height.toFixed(),
      })}
    >
      <div css={styles.viewImage({ img, position })} />
    </div>
  );
}
