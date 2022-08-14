import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';

export const styles = {
  wishItem: css({
    display: 'flex',
    borderTop: '1px solid #eee',
    padding: 10,
  }),
  wishItemImageArea: css({
    flex: '0 0 100px',
    [mq('xs')]: {
      flex: '0 0 150px',
    },
  }),
  wishItemInfoArea: css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    margin: '0 10px',
    overflow: 'hidden',
    '> *': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    strong: {
      fontWeight: 700,
    },
  }),
};
