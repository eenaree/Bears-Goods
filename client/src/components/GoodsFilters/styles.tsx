import { css } from '@emotion/react';

export const styles = {
  categoryZone: css({
    display: 'inline-block',
    width: '100%',
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
    padding: '1.2rem 2rem',
    cursor: 'pointer',
  }),
};
