import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';

export const styles = {
  modalBody: css({
    width: 230,
    [mq('xs')]: {
      width: 300,
    },
  }),
  modalTitle: css({
    paddingBottom: 15,
    borderBottom: '1px solid #ff0000',
    fontWeight: 700,
  }),
  modalMessage: css({
    padding: '40px 0',
    textAlign: 'center',
    lineHeight: '25px',
    [mq('xs')]: {
      padding: '60px 0',
    },
  }),
  confirmButton: css({
    width: '100%',
    height: 30,
    borderRadius: 5,
    backgroundColor: '#666',
    color: '#fff',
  }),
};
