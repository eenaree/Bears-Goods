import { css } from '@emotion/react';

export const styles = {
  cartPriceZone: css({
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#eee',
  }),
  cartPriceArea: css({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px 0',
    strong: {
      fontWeight: 700,
    },
  }),
  smallText: css({
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 10,
    fontWeight: 700,
    color: '#666',
  }),
};
