import { css } from '@emotion/react';

export const styles = {
  filterZone: css({
    display: 'flex',
    overflowX: 'auto',
    padding: 10,
    marginTop: 20,
    borderTop: '1px solid #eee',
  }),
  filterButton: (currentFilter: boolean) =>
    css({
      flex: '0 0 100px',
      padding: '10px 0',
      marginRight: 10,
      borderRadius: 20,
      backgroundColor: currentFilter ? '#333' : '#f8f8f8',
      color: currentFilter ? '#fff' : 'inherit',
      fontWeight: currentFilter ? 700 : 500,
    }),
};
