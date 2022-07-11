import { css } from '@emotion/react';

export const styles = {
  categoryZone: css({
    display: 'inline-block',
    width: '100%',
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
  category: css({
    float: 'left',
    width: '25%',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    borderRight: 'none',
    '&:last-of-type': {
      border: '1px solid #eee',
    },
    fontSize: '1.4rem',
  }),
  categoryInput: css({
    display: 'none',
    '&:checked + label': {
      backgroundColor: '#eee',
      fontWeight: 700,
    },
  }),
  categoryLabel: css({
    display: 'block',
    padding: '1rem 0',
    textAlign: 'center',
    cursor: 'pointer',
  }),
  priceSortingZone: css({
    margin: '10px 0',
    display: 'flex',
    justifyContent: 'flex-end',
  }),
};
