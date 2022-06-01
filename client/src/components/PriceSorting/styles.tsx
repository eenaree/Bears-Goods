import styled from '@emotion/styled';
import { mq } from '@styles/mediaQueries';

export const PriceSortingZone = styled.div({
  textAlign: 'right',
  padding: 10,
  input: {
    display: 'none',
    '&:checked + label': {
      fontWeight: 700,
      textDecoration: 'underline',
    },
  },
  label: {
    marginLeft: 15,
    fontSize: '1.2rem',
    cursor: 'pointer',
  },
  [mq('sm')]: {
    label: {
      fontSize: '1.3rem',
    },
  },
});
