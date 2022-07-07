import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';

export const styles = {
  goodsListZone: css({
    display: 'flex',
    flexWrap: 'wrap',
  }),
  goodsCardZone: css({
    position: 'relative',
    flex: '0 1 calc(50% - 2rem)',
    maxWidth: 'calc(50% - 2rem)',
    margin: '1rem',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    borderRadius: 5,
    boxShadow: '0 2px 2px rgba(0,0,0,0.2)',
    transition: 'transform 0.5s',
    '&:hover': {
      transform: 'translate(0, -5px)',
      boxShadow: '10px 10px 10px rgba(255,255,255,0.4)',
    },
    [mq('sm')]: {
      flex: '0 1 calc(33.3% - 2rem)',
      maxWidth: 'calc(33% - 2rem)',
    },
    [mq('md')]: {
      flex: '0 1 calc(25% - 2rem)',
      maxWidth: 'calc(25% - 2rem)',
    },
  }),
  cardImageArea: css({
    textAlign: 'center',
    a: {
      color: 'inherit',
    },
    img: {
      width: '100%',
    },
  }),
  cardLabelArea: css({
    padding: '0 10px',
    fontSize: '1.2rem',
    fontWeight: 700,
    backgroundColor: '#f8f8f8',
    textAlign: 'center',
    p: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      padding: '6px 0',
    },
    strong: {
      color: '#ff0000',
      fontSize: '1.5rem',
    },
  }),
};
