import { css, keyframes } from '@emotion/react';

const LeftAndRightMoving = keyframes({
  from: {
    left: '0%',
  },
  to: {
    left: '90%',
  },
});

export const styles = {
  wrapper: (isLoading: boolean) => [
    css({
      width: '100%',
      backgroundColor: '#f8f8f8',
      overflow: 'hidden',
      transition: 'opacity 1s, visibility 1s',
    }),
    isLoading
      ? css({ opacity: 1, visibility: 'visible' })
      : css({ opacity: 0, visibility: 'hidden', transitionDelay: '0.5s' }),
  ],
  bar: (isLoading: boolean) => [
    css({
      position: 'relative',
      height: 3,
      backgroundColor: '#ff8080',
    }),
    isLoading
      ? css({
          width: '30%',
          animation: `${LeftAndRightMoving} 1s linear infinite alternate`,
        })
      : css({
          width: '100%',
        }),
  ],
};
