import styled from '@emotion/styled';
import { mq } from '@styles/mediaQueries';

export const Container = styled.div({
  padding: 20,
  [mq('md')]: {
    '&:after': {
      clear: 'both',
      display: 'block',
      content: '""',
    },
  },
});

export const SelectedOptionList = styled.div({
  [mq('md')]: {
    float: 'right',
    width: '48%',
  },
});

export const TotalPrice = styled.div({
  textAlign: 'center',
  margin: '20px 0',
  strong: {
    fontWeight: 700,
    fontSize: '1.5rem',
    color: '#ff0000',
  },
  [mq('md')]: {
    float: 'right',
    width: '48%',
  },
});
