import styled from '@emotion/styled';
import { mq } from '@styles/mediaQueries';

export const Container = styled.div({
  padding: 20,
  a: {
    fontSize: '1.6rem',
  },
  [mq('md')]: {
    '&:after': {
      clear: 'both',
      display: 'block',
      content: '""',
    },
  },
});

export const SelectedOptionList = styled.div({
  [mq('sm')]: {
    float: 'right',
    width: '48%',
  },
});

export const TotalPrice = styled.div({
  textAlign: 'center',
  margin: '20px 0',
  fontSize: '1.5rem',
  strong: {
    fontWeight: 700,
    fontSize: '2.2rem',
    color: '#ff0000',
  },
  [mq('sm')]: {
    float: 'right',
    width: '48%',
  },
});
