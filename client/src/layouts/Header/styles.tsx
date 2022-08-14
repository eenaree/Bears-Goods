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
  headerTop: css({
    borderBottom: '1px solid #eee',
  }),
  headerTopButtons: css({
    display: 'flex',
    justifyContent: 'flex-end',
    li: {
      margin: '5px 10px',
    },
    a: {
      position: 'relative',
      fontSize: '2.5rem',
      color: 'inherit',
    },
  }),
  cartItemCount: css({
    position: 'absolute',
    top: '-2px',
    right: '-6px',
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
