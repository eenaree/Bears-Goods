import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';

export const styles = {
  goodsListZone: css({
    display: 'flex',
    flexWrap: 'wrap',
  }),
  blind: css({
    position: 'absolute',
    width: 1,
    height: 1,
    margin: '-1px',
    padding: 0,
    border: 0,
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    whiteSpace: 'nowrap',
  }),
  goodsCardLink: css({
    display: 'block',
    position: 'relative',
    maxWidth: 'calc(50% - 2rem)',
    margin: '1rem',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    borderRadius: 5,
    boxShadow: '0 2px 2px rgba(0,0,0,0.2)',
    color: 'inherit',
    transition: 'transform 0.5s',
    '&:hover': {
      transform: 'translate(0, -5px)',
      boxShadow: '10px 10px 10px rgba(255,255,255,0.4)',
    },
    [mq('sm')]: {
      maxWidth: 'calc(33.3% - 2rem)',
    },
    [mq('md')]: {
      maxWidth: 'calc(25% - 2rem)',
    },
  }),
  cardImageArea: css({
    display: 'block',
    textAlign: 'center',
    img: {
      width: '100%',
    },
  }),
  cardLabelArea: css({
    em: {
      display: 'block',
      padding: '5px 10px',
      fontSize: '1.2rem',
      fontWeight: 700,
      backgroundColor: '#f8f8f8',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    strong: {
      color: '#ff0000',
      fontSize: '1.5rem',
    },
  }),
};
