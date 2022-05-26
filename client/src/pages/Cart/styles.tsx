import styled from '@emotion/styled';
import { mq } from '@styles/mediaQueries';

export const Container = styled.div({
  padding: 20,
  h2: {
    fontSize: '1.4rem',
    fontWeight: 700,
  },
  [mq('md')]: {
    '&:after': {
      clear: 'both',
      display: 'block',
      content: '""',
    },
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

export const CartItemAllCheckbox = styled.div({
  marginTop: 20,
  paddingLeft: 5,
  label: {
    marginLeft: 5,
  },
});

export const PriceBox = styled.div({
  padding: '10px 20px',
  borderRadius: 15,
  backgroundColor: '#eee',
  textAlign: 'right',
  p: {
    margin: '10px 0',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  span: {
    flex: '0 0 150px',
    position: 'relative',
  },
  'span:first-of-type': {
    fontWeight: 700,
    '&:hover': {
      em: {
        visibility: 'visible',
        opacity: 1,
      },
    },
  },
  strong: {
    fontWeight: 700,
    fontSize: '1.5rem',
    color: '#ff0000',
  },
  hr: {
    borderTop: '1px solid #ddd',
    borderBottom: 'none',
  },
  [mq('md')]: {
    float: 'left',
    width: '33%',
    height: 150,
    padding: 20,
    margin: '20px 0 0 2%',
    boxSizing: 'border-box',
  },
});

export const ToolTipText = styled.em({
  visibility: 'hidden',
  zIndex: 1,
  position: 'absolute',
  bottom: '140%',
  left: '50%',
  transform: 'translate(-40%, 0)',
  padding: 10,
  width: 180,
  textAlign: 'center',
  fontSize: '0.875rem',
  fontWeight: 400,
  backgroundColor: '#fff',
  borderRadius: 10,
  opacity: 0,
  transition: 'opacity 0.5s',
  '&:after': {
    content: '""',
    position: 'absolute',
    top: '100%',
    right: '25%',
    border: '5px solid #fff',
    borderColor: '#fff transparent transparent transparent',
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
