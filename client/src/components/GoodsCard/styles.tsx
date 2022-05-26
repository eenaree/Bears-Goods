import styled from '@emotion/styled';
import { mq } from '@styles/mediaQueries';

export const GoodsCardWrapper = styled.div({
  float: 'left',
  width: '50%',
  textAlign: 'center',
  img: {
    width: '100%',
    maxWidth: 300,
  },
  span: {
    display: 'block',
    margin: '8px 0',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    color: '#333',
  },
  strong: {
    fontWeight: 700,
    color: '#333',
  },
  [mq('sm')]: {
    width: '33.3%',
  },
  [mq('md')]: {
    width: '25%',
    marginBottom: '30px',
  },
});
