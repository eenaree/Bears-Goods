import { css } from '@emotion/react';

const mainAxis = css({
  position: 'relative',
  display: 'inline-block',
  width: 12,
  height: 2,
  backgroundColor: '#666',
  verticalAlign: 'middle',
});

export const styles = {
  input: css({
    width: 30,
    border: 'solid #eee',
    borderWidth: '1px 0',
    outline: 'none',
    textAlign: 'center',
    height: 25,
  }),
  buttonCommon: css({
    height: 25,
    width: 18,
    boxSizing: 'content-box',
    border: '1px solid #eee',
    backgroundColor: '#fff',
  }),
  minus: mainAxis,
  plus: [
    mainAxis,
    css({
      '&:after': {
        content: '""',
        position: 'absolute',
        top: '-5px',
        left: 5,
        width: 2,
        height: 12,
        backgroundColor: '#666',
      },
    }),
  ],
};
