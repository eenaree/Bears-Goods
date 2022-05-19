import styled from '@emotion/styled';
import { mq } from '@styles/mediaQueries';

export const Container = styled.div`
  position: relative;
  border-bottom: 1px solid #eee;
`;

export const Inner = styled.div`
  ${mq('lg')} {
    position: relative;
    width: 1100px;
    margin: 0 auto;
  }
`;

export const Logo = styled.h1`
  padding: 20px 0;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  a {
    color: #666;
  }
  ${mq('lg')} {
    padding: 30px 0;
    font-size: 1.5rem;
  }
`;

export const CartButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  ${mq('lg')} {
    top: 25px;
    right: 25px;
  }
`;

export const CartItemCount = styled.span({
  position: 'absolute',
  top: '-5px',
  right: '-5px',
  display: 'block',
  minWidth: 15,
  height: 15,
  padding: 1,
  lineHeight: '17px',
  backgroundColor: '#ff0000',
  borderRadius: 10,
  color: '#fff',
  fontSize: '0.75rem',
  textAlign: 'center',
});
