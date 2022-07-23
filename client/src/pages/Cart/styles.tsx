import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';

export const styles = {
  cartZone: css({
    padding: 20,
    [mq('lg')]: {
      padding: '20px 0',
    },
  }),
  cartTitle: css({
    fontSize: '2.2rem',
    fontWeight: 700,
    [mq('xs')]: {
      fontSize: '2.4rem',
    },
  }),
  noneCart: css({
    padding: '150px 0',
    margin: '20px 0',
    backgroundColor: '#eee',
    textAlign: 'center',
    fontSize: '1.4rem',
    a: {
      display: 'inline-block',
      marginTop: 20,
      padding: 15,
      borderRadius: 5,
      backgroundColor: '#fff',
      fontWeight: 700,
      color: 'inherit',
    },
  }),
};
