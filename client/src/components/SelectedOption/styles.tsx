import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const selectOptionSlideIn = keyframes({
  from: {
    transform: 'translateY(-50%)',
  },
  to: {
    transform: 'translateY(0)',
  },
});

const selectOptionFadeOut = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});

export const Wrapper = styled.div<{ isMounted: boolean }>(
  {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8',
    margin: '10px 0',
    padding: '10px 30px',
    fontSize: '1.4rem',
    input: {
      width: 20,
      height: 20,
      textAlign: 'center',
      margin: '0 5px',
      border: '1px solid #eee',
      borderRadius: 5,
    },
  },
  props => ({
    animation: `${
      props.isMounted ? selectOptionSlideIn : selectOptionFadeOut
    } 0.5s forwards`,
  })
);

export const Price = styled.div({
  fontWeight: 700,
});
