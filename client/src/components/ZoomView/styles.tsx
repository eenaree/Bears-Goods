import { css } from '@emotion/react';

interface Position {
  left: number;
  top: number;
}

type StringPosition = {
  [P in keyof Position]: string;
};

interface ViewContainer extends StringPosition {
  width: string;
  height: string;
}

interface ViewImage {
  img: string;
  position: Position;
}

export const styles = {
  viewContainer: ({ left, top, width, height }: ViewContainer) =>
    css({
      zIndex: 1,
      position: 'absolute',
      left: `${left}px`,
      top: `${top}px`,
      width: `${width}px`,
      height: `${height}px`,
    }),
  viewImage: ({ img, position }: ViewImage) =>
    css({
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      background: `url(${img}) no-repeat`,
      backgroundPosition: `${position.left}px ${position.top}px`,
      backgroundSize: '200% 200%',
    }),
};
