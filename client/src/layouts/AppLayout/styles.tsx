import styled from '@emotion/styled';
import { mq } from '@styles/mediaQueries';

export const Inner = styled.div({
  [mq('lg')]: {
    width: 1100,
    margin: '0 auto',
  },
});
