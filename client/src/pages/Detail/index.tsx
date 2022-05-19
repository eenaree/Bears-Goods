import * as React from 'react';
import { useCallback, useEffect, useState, useReducer } from 'react';
import { Link, useParams } from 'react-router-dom';
import goodsAPI from '@api/goods';
import { Option, GoodsData } from '@typings/db';
import { Container, SelectedOptionList, TotalPrice } from './styles';
import { addThousandSeperatorToNumber } from '@utils';
import { optionReducer } from '@reducers/option';
import SelectedOption from '@components/SelectedOption';
import GoodsInfo from '@components/GoodsInfo';
import AddToCartButton from '@components/AddToCartButton';

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
  const checkPrevSelectedSize = useCallback(
    (size: string | number): boolean => {
      return options.some(option => option.size === size);
    },
    [options]
  );

  useEffect(() => {
    if (!size) return;
    if (size && goods) {
      if (checkPrevSelectedSize(size)) {
        alert('이미 추가된 옵션입니다.');
        return;
      }
      const newOption: Option = {
        name: goods.name,
        size,
        price: goods.price,
        quantity: 1,
      };
      dispatch({ type: 'ADD_OPTION', option: newOption });
    }
  }, [size, goods]);

  const renderSelectedOptionList: React.ReactElement[] = options.map(option => (
    <SelectedOption
      key={option.name + option.size}
      option={option}
      dispatch={dispatch}
    />
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
          <AddToCartButton options={options} />
          {options.length > 0 && (
            <SelectedOptionList>{renderSelectedOptionList}</SelectedOptionList>
          )}
        </>
      )}
    </Container>
  );
}
