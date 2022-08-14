import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';

export const styles = {
  wishZone: css({
    padding: 20,
    [mq('lg')]: {
      padding: '20px 0',
    },
  }),
  wishTitle: css({
    fontSize: '2.2rem',
  }),
};
