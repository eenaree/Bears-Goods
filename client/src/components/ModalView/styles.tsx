import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const modalContainerFadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const modalContainerFadeOut = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});

export const ModalContainer = styled.div<{ isMounted: boolean | undefined }>(
  {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    animationDuration: '0.5s',
    animationTimingFunction: 'linear',
    animationFillMode: 'forwards',
  },
  props => ({
    animationName: `${
      props.isMounted ? modalContainerFadeIn : modalContainerFadeOut
    }`,
  })
);
