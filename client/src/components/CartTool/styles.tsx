import { css } from '@emotion/react';

export const styles = {
  cartToolZone: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  }),
  cartAllCheckboxText: css({
    marginLeft: 5,
  }),
  cartActionButton: css({
    padding: '5px 10px',
    border: '1px solid #eee',
    borderRadius: 5,
    fontWeight: 700,
    transition: '0.5s',
    '&:hover': {
      backgroundColor: '#eee',
    },
  }),
};
