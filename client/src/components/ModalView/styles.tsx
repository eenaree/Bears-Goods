import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';

export const styles = {
  modalContainer: css({
    zIndex: 1,
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  modalView: css({
    width: 200,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    boxShadow: '0 1px 4px rgba(255,255,255,0.4)',
    fontSize: '1.4rem',
    [mq('sm')]: {
      width: 300,
    },
  }),
};
