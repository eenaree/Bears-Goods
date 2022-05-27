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

export const Wrapper = styled.div<{ isMounted: boolean }>(
  {
    display: 'flex',
    position: 'relative',
    height: 120,
    padding: '0 5px',
    borderBottom: '1px solid #eee',
    '&:last-of-type': {
      borderBottom: 'none',
    },
    [mq('xs')]: {
      padding: '0 10px',
    },
    [mq('sm')]: {
      height: 150,
    },
  },
  props => ({
    animation: !props.isMounted ? `${cartItemFadeOut} 0.5s` : undefined,
  })
);

export const Checkbox = styled.div({
  width: 20,
  input: {
    position: 'relative',
    top: '50%',
    transform: 'translate(0, -50%)',
  },
  label: {
    visibility: 'hidden',
  },
});

export const ImageWrapper = styled.div({
  minWidth: 100,
  width: 100,
  height: 100,
  textAlign: 'center',
  margin: '0 10px',
  img: {
    width: '90%',
    height: '90%',
    transform: 'translate(0, 20px)',
  },
  [mq('xs')]: {
    width: 120,
    height: 120,
    img: {
      transform: 'translate(0, 10px)',
    },
  },
  [mq('sm')]: {
    width: 150,
    height: 150,
  },
});

export const ItemInfo = styled.div({
  display: 'flex',
  minWidth: 150,
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  [mq('sm')]: {
    width: 'calc(100% - 150px)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  [mq('md')]: {
    width: 'auto',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'start',
  },
});

export const Product = styled.div({
  display: 'flex',
  flexDirection: 'column',
  color: '#666',
  fontSize: '1.3rem',
  fontWeight: 700,
  p: {
    margin: '5px 0',
  },
  [mq('xs')]: {
    fontSize: '1.4rem',
  },
  [mq('sm')]: {
    flex: '1.5 1 0',
  },
  [mq('md')]: {
    flex: 0,
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
  [mq('md')]: {
    flex: 0,
  },
});

export const Price = styled.div({
  fontSize: '1.4rem',
  fontWeight: 400,
  strong: {
    fontWeight: 700,
  },
  [mq('sm')]: {
    flex: '1 1 0',
  },
  [mq('md')]: {
    flex: 0,
  },
});

export const DeleteButton = styled.button({
  position: 'absolute',
  top: '50%',
  right: '4%',
  transform: 'translate(0, -50%)',
});
