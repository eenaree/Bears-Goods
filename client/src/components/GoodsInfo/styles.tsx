import styled from '@emotion/styled';
import { mq } from '@styles/mediaQueries';

export const GoodsInfoContainer = styled.div({
  margin: '20px 0',
});

export const GoodsImageWrapper = styled.div({
  border: '1px solid #eee',
  textAlign: 'center',
  img: {
    width: '100%',
    textAlign: 'center',
  },
  [mq('md')]: {
    float: 'left',
    width: '49%',
  },
});

export const GoodsTable = styled.table({
  width: '100%',
  margin: '20px 0',
  tr: {
    display: 'block',
    padding: '10px 0',
  },
  th: {
    display: 'inline-block',
    width: '25%',
    fontWeight: 700,
  },
  td: {
    display: 'inline-block',
    width: '75%',
  },
  select: {
    width: '100%',
    height: 30,
    borderColor: '#eee',
  },
  [mq('md')]: {
    float: 'right',
    width: '40%',
  },
});
