import styled from '@emotion/styled';

export const GoodsFilterContainer = styled.div`
  margin-bottom: 20px;
  input {
    display: none;
    &:checked {
      + label {
        background-color: #333;
        color: #fff;
        transition: 0.3s;
      }
    }
  }
  label {
    display: inline-block;
    width: 25%;
    padding: 10px 0;
    background-color: #f8f8f8;
    text-align: center;
    cursor: pointer;
  }
`;
