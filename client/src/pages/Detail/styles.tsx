import styled from '@emotion/styled';
import { mq } from '@styles/mediaQueries';

export const Container = styled.div`
  margin: 20px;
  ${mq('md')} {
    &:after {
      clear: both;
      display: block;
      content: '';
    }
  }
  ${mq('lg')} {
    margin: 20px 0;
  }
`;

export const AddToCartButton = styled.button`
  width: 100%;
  padding: 10px 0;
  background-color: #333;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  transition: 0.5s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
  ${mq('md')} {
    float: right;
    width: 48%;
  }
`;

export const SelectedOptionList = styled.div`
  ${mq('md')} {
    float: right;
    width: 48%;
  }
`;

export const TotalPrice = styled.div`
  text-align: center;
  margin: 20px 0;
  strong {
    font-weight: 700;
    font-size: 1.5rem;
    color: #ff0000;
  }
  ${mq('md')} {
    float: right;
    width: 48%;
  }
`;
