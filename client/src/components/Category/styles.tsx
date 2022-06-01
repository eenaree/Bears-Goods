import styled from '@emotion/styled';
import { mq } from '@styles/mediaQueries';

export const CategoryArea = styled.div({
  display: 'flex',
  border: '1px solid #eee',
  margin: '20px 0',
  input: {
    display: 'none',
    '&:checked + label': {
      backgroundColor: '#f8f8f8',
      fontWeight: 700,
      textDecoration: 'underline',
    },
  },
  label: {
    flexBasis: '25%',
    minWidth: 50,
    padding: 10,
    borderLeft: '1px solid #eee',
    textAlign: 'center',
    fontSize: '1.4rem',
    cursor: 'pointer',
    '&:first-of-type': {
      border: 'none',
    },
    '&:hover': {
      backgroundColor: '#f8f8f8',
    },
  },
  [mq('sm')]: {
    label: {
      textAlign: 'left',
      padding: '10px 20px',
    },
  },
});
