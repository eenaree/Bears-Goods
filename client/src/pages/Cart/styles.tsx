import styled from '@emotion/styled';

export const Container = styled.div({
  padding: 20,
  h2: {
    fontSize: '1.4rem',
    fontWeight: 700,
  },
});

export const CartItemList = styled.div({
  margin: '20px 0',
  borderRadius: 15,
  backgroundColor: '#fff',
});

export const CartItemAllCheckbox = styled.div({
  marginTop: 20,
  paddingLeft: 5,
  label: {
    marginLeft: 5,
  },
});

export const TotalPrice = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  border: '1px solid #eee',
  borderRadius: 15,
  backgroundColor: '#eee',
  textAlign: 'right',
  'span:first-of-type': {
    fontWeight: 700,
  },
  strong: {
    fontWeight: 700,
    fontSize: '1.5rem',
    color: '#ff0000',
  },
});

export const ButtonWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  button: {
    margin: '20px 0',
    padding: '10px 20px',
    backgroundColor: '#fff',
    border: '1px solid #eee',
    borderRadius: 10,
    fontWeight: 700,
    transition: '0.5s',
    '&:hover': {
      backgroundColor: '#eee',
    },
  },
});

export const NoneCartList = styled.div({
  margin: '20px 0',
  padding: '200px 0',
  textAlign: 'center',
  backgroundColor: '#f8f8f8',
  borderRadius: 15,
  fontSize: '0.875rem',
  a: {
    border: '1px solid #eee',
    padding: 15,
    margin: '20px 0',
    display: 'inline-block',
    backgroundColor: '#fff',
    color: '#333',
    fontWeight: 700,
  },
});
