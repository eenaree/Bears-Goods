import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';

interface Scanner {
  left: string;
  top: string;
  width: string;
  height: string;
}

export const styles = {
  zoomScanner: ({ left, top, width, height }: Scanner) =>
    css({
      [mq('sm')]: {
        position: 'absolute',
        left: `${left}px`,
        top: `${top}px`,
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: 'rgba(255,255,255,0.7)',
        border: '1px solid #666',
        cursor: 'pointer',
      },
    }),
};
