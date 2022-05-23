import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { mq } from '@styles/mediaQueries';

const cartItemFadeOut = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});

export const CartItemWrapper = styled.div<{ isMounted: boolean }>(
  {
    display: 'flex',
    position: 'relative',
    height: 120,
    padding: '0 10px',
    border: '1px solid #eee',
    borderBottom: 'none',
    '&:first-of-type': {
      borderRadius: '15px 15px 0 0',
    },
    '&:last-of-type': {
      borderBottom: '1px solid #eee',
      borderRadius: '0 0 15px 15px',
    },
    [mq('sm')]: {
      height: 150,
    },
  },
  props => ({
    animation: !props.isMounted ? `${cartItemFadeOut} 0.5s` : undefined,
  })
);

export const ItemImageWrapper = styled.div({
  width: 120,
  height: 120,
  textAlign: 'center',
  img: {
    width: '90%',
    height: '90%',
    transform: 'translate(0, 10px)',
  },
  [mq('sm')]: {
    width: 150,
    height: 150,
  },
});

export const ItemInfo = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  marginLeft: 20,
  [mq('sm')]: {
    width: 'calc(100% - 150px)',
    marginLeft: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export const Product = styled.div({
  display: 'flex',
  flexDirection: 'column',
  color: '#666',
  fontSize: '0.875rem',
  fontWeight: 700,
  p: {
    margin: '5px 0',
  },
  [mq('sm')]: {
    marginLeft: 40,
    flex: '1.5 1 0',
  },
});

export const Quantity = styled.div({
  display: 'flex',
  input: {
    width: 25,
    height: 25,
    textAlign: 'center',
    border: '1px solid #eee',
  },
  button: {
    minWidth: 30,
    height: 29,
    backgroundColor: '#f8f8f8',
    '&:hover': {
      backgroundColor: '#eee',
    },
    '&:last-of-type': {
      marginLeft: 5,
      '&:hover': {
        backgroundColor: '#ddd',
      },
    },
  },
  [mq('sm')]: {
    flex: '1.2 1 0',
  },
});

export const Price = styled.div({
  strong: {
    fontWeight: 700,
    fontSize: '1rem',
  },
  fontSize: '0.875rem',
  fontWeight: 400,
  [mq('sm')]: {
    flex: '1 1 0',
  },
});

export const DeleteButton = styled.button({
  position: 'absolute',
  top: 10,
  right: 10,
  [mq('sm')]: {
    top: '50%',
    right: '5%',
    transform: 'translate(0, -50%)',
  },
});
