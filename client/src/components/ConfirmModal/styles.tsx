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
    textAlign: 'center',
    padding: '40px 0',
  }),
  modalActions: css({
    display: 'flex',
    justifyContent: 'space-evenly',
    button: {
      width: '40%',
      padding: '10px 0',
      borderRadius: 5,
      backgroundColor: '#ddd',
      fontWeight: 700,
      transition: '0.5s',
      '&:hover': {
        backgroundColor: '#eee',
      },
      '&:first-of-type': {
        color: '#ff0000',
      },
    },
  }),
};
