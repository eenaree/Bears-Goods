import styled from '@emotion/styled';
import { mq } from '@styles/mediaQueries';

export const Button = styled.button({
  width: '100%',
  padding: '10px 0',
  backgroundColor: '#333',
  color: '#fff',
  fontSize: '1.8rem',
  fontWeight: 700,
  transition: '0.5s',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  [mq('sm')]: {
    float: 'right',
    width: '48%',
  },
});
