import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const LeftAndRightMoving = keyframes({
  from: {
    left: '0%',
  },
  to: {
    left: '90%',
  },
});

export const Bar = styled.div<{ isLoading: boolean }>(
  {
    position: 'relative',
    height: 3,
    backgroundColor: '#ff8080',
  },
  props => ({
    width: props.isLoading ? '30%' : '100%',
    animation: props.isLoading
      ? `${LeftAndRightMoving} 1s linear infinite alternate`
      : undefined,
  })
);

export const CreateBar = styled.div<{ isMounted: boolean }>(
  {
    width: '100%',
    backgroundColor: '#f8f8f8',
    overflow: 'hidden',
    transition: 'opacity 1s',
  },
  props => ({
    opacity: props.isMounted ? 1 : 0,
  })
);
