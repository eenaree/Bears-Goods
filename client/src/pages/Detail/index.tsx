import * as React from 'react';
import { useEffect, useState, useReducer, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import goodsAPI from '@api/goods';
import { Option, GoodsData } from '@typings/db';
import {
  AddToCartButton,
  Container,
  SelectedOptionList,
  TotalPrice,
} from './styles';
import { addThousandSeperatorToNumber } from '@utils';
import { optionReducer } from '@reducers/option';
import SelectedOption from '@components/SelectedOption';
import GoodsInfo from '@components/GoodsInfo';

export default function Detail(): React.ReactElement {
  const params = useParams<'id'>();
  const [goods, setGoods] = useState<GoodsData | null>(null);

  useEffect(() => {
    if (params.id) {
      goodsAPI
        .getGoods(params.id)
        .then(({ data }) => {
          setGoods(data);
        })
        .catch(error => console.error(error));
    }
  }, [params.id]);

  const [size, setSize] = useState<string | number>('');
  const onChangeSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value);
  };
  const [{ options, totalPrice }, dispatch] = useReducer(optionReducer, {
    options: [],
    totalPrice: 0,
  });
  const indexRef = useRef<number>(1);

  useEffect(() => {
    if (!size) return;
    if (size && goods) {
      const newOption: Option = {
        id: indexRef.current,
        name: goods.name,
        size,
        price: goods.price,
        quantity: 1,
      };
      dispatch({ type: 'ADD_OPTION', option: newOption });
      indexRef.current += 1;
    }
  }, [size, goods]);

  const renderSelectedOptionList: React.ReactElement[] = options.map(option => (
    <SelectedOption key={option.id} option={option} dispatch={dispatch} />
  ));

  return (
    <Container>
      <Link to="/">목록보기</Link>
      {goods && (
        <>
          <GoodsInfo goods={goods} size={size} onChangeSize={onChangeSize} />
          <TotalPrice>
            총 주문금액
            <strong> {addThousandSeperatorToNumber(totalPrice)}</strong> 원
          </TotalPrice>
          <AddToCartButton>장바구니 추가</AddToCartButton>
          {options.length > 0 && (
            <SelectedOptionList>{renderSelectedOptionList}</SelectedOptionList>
          )}
        </>
      )}
    </Container>
  );
}
