import styled from '@emotion/styled';
import { mq } from '@styles/mediaQueries';

export const Container = styled.div({
  position: 'relative',
  borderBottom: '1px solid #eee',
});

export const Inner = styled.div({
  [mq('lg')]: {
    position: 'relative',
    width: 1100,
    margin: '0 auto',
  },
});

export const Logo = styled.h1({
  padding: '20px 0',
  textAlign: 'center',
  fontSize: '2rem',
  fontWeight: 700,
  a: {
    color: '#666',
  },
  [mq('md')]: {
    padding: '30px 0',
    fontSize: '2.8rem',
  },
});

export const CartButton = styled.button({
  position: 'absolute',
  top: 15,
  right: 15,
  [mq('md')]: {
    top: 25,
    right: 25,
  },
});

export const CartItemCount = styled.span({
  position: 'absolute',
  top: '-5px',
  right: '-5px',
  display: 'block',
  minWidth: 15,
  height: 15,
  padding: 1,
  lineHeight: '15px',
  backgroundColor: '#ff0000',
  borderRadius: 10,
  color: '#fff',
  fontSize: '1rem',
  textAlign: 'center',
});
