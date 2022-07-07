import { css } from '@emotion/react';

export const styles = {
  dropdownZone: css({
    position: 'relative',
    width: 150,
    height: 40,
  }),
  dropdownButton: css({
    position: 'relative',
    width: '100%',
    height: '100%',
    border: '1px solid #eee',
    borderRadius: 5,
    fontWeight: 700,
    '&:after': {
      content: '""',
      position: 'absolute',
      top: '45%',
      right: 10,
      padding: 3,
      border: 'solid #666',
      borderWidth: '0 0 2px 2px',
      transform: 'rotate(-45deg) translateY(-45%)',
    },
  }),
  dropdownList: (isActive: boolean) =>
    css({
      zIndex: 1,
      position: 'absolute',
      top: 45,
      left: 0,
      backgroundColor: '#fff',
      boxShadow: '0 1px 10px rgba(0,0,0,0.3)',
      borderRadius: 5,
      transition: '0.5s',
      button: {
        width: '100%',
        padding: '10px 0',
        borderBottom: '1px solid #eee',
        '&:last-of-type': {
          border: 'none',
        },
      },
      visibility: isActive ? 'visible' : 'hidden',
      opacity: isActive ? 1 : 0,
    }),
  selectedOption: css({
    backgroundColor: '#eee',
    color: '#333',
    fontWeight: 700,
  }),
  notSelectedOption: css({
    '&:hover': {
      backgroundColor: '#eee',
    },
  }),
};
