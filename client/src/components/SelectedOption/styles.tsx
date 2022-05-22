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

export const SelectedOptionWrapper = styled.div<{ isMounted: boolean }>`
  display: flex;
  justify-content: space-between;
  background-color: #f8f8f8;
  margin: 10px 0;
  padding: 10px 30px;
  font-size: 0.875rem;
  input {
    width: 20px;
    height: 20px;
    text-align: center;
    margin: 0 5px;
    border: 1px solid #eee;
    border-radius: 5px;
  }
  animation: ${props =>
      props.isMounted ? selectOptionSlideIn : selectOptionFadeOut}
    0.5s forwards;
`;

export const Price = styled.div`
  font-weight: 700;
`;
