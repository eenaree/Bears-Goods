import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';

export const styles = {
  modalBody: css({
    width: 230,
    [mq('xs')]: {
      width: 300,
    },
  }),
  modalMessage: css({
    padding: '40px 0',
    textAlign: 'center',
    [mq('sm')]: {
      padding: '60px 0',
    },
  }),
  confirmButton: css({
    display: 'block',
    width: '100%',
    padding: 10,
    boxSizing: 'border-box',
    borderRadius: 5,
    backgroundColor: '#666',
    color: '#fff',
    textAlign: 'center',
  }),
};
