import styled from '@emotion/styled';

export const GoodsFilterContainer = styled.div({
  marginBottom: 20,
  input: {
    display: 'none',
    '&:checked': {
      '+ label': {
        backgroundColor: '#333',
        color: '#fff',
        transition: '0.3s',
      },
    },
  },
  label: {
    display: 'inline-block',
    width: '25%',
    padding: '10px 0',
    backgroundColor: '#f8f8f8',
    textAlign: 'center',
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      backgroundColor: '#333',
      color: '#fff',
    },
  },
});
