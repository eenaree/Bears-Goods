import styled from '@emotion/styled';
import { mq } from '@styles/mediaQueries';

export const Container = styled.div({
  padding: '20px 10px',
  h2: {
    fontSize: '2.4rem',
    fontWeight: 700,
  },
  [mq('xs')]: {
    padding: '20px',
  },
  [mq('md')]: {
    '&:after': {
      clear: 'both',
      display: 'block',
      content: '""',
    },
  },
  [mq('lg')]: {
    padding: '20px 0',
  },
});

export const CartItemList = styled.div({
  margin: '20px 0',
  borderRadius: 15,
  backgroundColor: '#fff',
  border: '1px solid #eee',
  [mq('md')]: {
    float: 'left',
    width: '65%',
    boxSizing: 'border-box',
  },
});

export const SelectZone = styled.div({
  marginTop: 20,
  paddingLeft: 5,
  fontWeight: 700,
  span: {
    '&:after': {
      content: '"|"',
      display: 'inline-block',
      margin: '0 10px 0 15px',
    },
  },
  label: {
    marginLeft: 5,
    fontSize: '1.4rem',
  },
  button: {
    fontWeight: 700,
  },
});

export const ButtonGroup = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  a: {
    margin: '20px 0',
    padding: '10px 20px',
    backgroundColor: '#fff',
    border: '1px solid #eee',
    borderRadius: 10,
    fontSize: '1.3rem',
    fontWeight: 700,
    color: '#333',
    transition: '0.5s',
    '&:hover': {
      backgroundColor: '#eee',
    },
  },
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
  [mq('md')]: {
    float: 'left',
    width: '33%',
    marginLeft: '2%',
    boxSizing: 'border-box',
  },
});

export const NoneCartList = styled.div({
  margin: '20px 0',
  padding: '200px 0',
  textAlign: 'center',
  backgroundColor: '#f8f8f8',
  borderRadius: 15,
  fontSize: '1.4rem',
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
