import styled from '@emotion/styled';
import { mq } from '@styles/mediaQueries';

export const GoodsCardWrapper = styled.div`
  float: left;
  width: 50%;
  text-align: center;
  img {
    width: 100%;
    max-width: 300px;
  }
  span {
    display: block;
    margin: 8px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #333;
  }
  strong {
    font-weight: 700;
    color: #333;
  }
  ${mq('sm')} {
    width: 33.3%;
  }
  ${mq('md')} {
    width: 25%;
    margin-bottom: 30px;
  }
`;
