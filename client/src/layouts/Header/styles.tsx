import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';

export const styles = {
  headerZone: css({
    position: 'relative',
    borderBottom: '1px solid #eee',
  }),
  headerInner: css({
    [mq('lg')]: {
      position: 'relative',
      width: 1100,
      margin: '0 auto',
    },
  }),
  headerLogo: css({
    padding: '20px 0',
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 700,
    a: {
      color: '#666',
    },
    [mq('md')]: {
      padding: '30px 0',
      fontSize: '2.8rem',
    },
  }),
  cartButton: css({
    position: 'absolute',
    top: 15,
    right: 15,
    [mq('md')]: {
      top: 25,
      right: 25,
    },
  }),
  cartItemCount: css({
    position: 'absolute',
    top: '-5px',
    right: '-5px',
    display: 'block',
    minWidth: 15,
    height: 15,
    padding: 1,
    lineHeight: '15px',
    backgroundColor: '#ff0000',
    borderRadius: 10,
    color: '#fff',
    fontSize: '1rem',
    textAlign: 'center',
  }),
};
