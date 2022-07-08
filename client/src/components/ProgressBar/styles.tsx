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
  wrapper: (isLoading: boolean) =>
    css({
      opacity: isLoading ? 1 : 0,
      visibility: isLoading ? 'visible' : 'hidden',
      transitionDelay: isLoading ? '0' : '0.5s',
      width: '100%',
      backgroundColor: '#f8f8f8',
      overflow: 'hidden',
      transition: 'opacity 1s, visibility 1s',
    }),
  bar: (isLoading: boolean) =>
    css({
      position: 'relative',
      width: isLoading ? '30%' : '100%',
      height: 3,
      backgroundColor: '#ff8080',
      animation: isLoading
        ? `${LeftAndRightMoving} 1s linear infinite alternate`
        : undefined,
    }),
};
