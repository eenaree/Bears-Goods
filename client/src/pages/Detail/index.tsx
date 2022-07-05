import * as React from 'react';
import { useEffect, useMemo, useReducer, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import goodsAPI from '@api/goods';
import AddToCartButton from '@components/AddToCartButton';
import CartCheckModal from '@components/CartCheckModal';
import GoodsInfo from '@components/GoodsInfo';
import SelectedOption from '@components/SelectedOption';
import useSize from '@hooks/useSize';
import { addThousandSeperatorToNumber } from '@lib/utils';
import { optionReducer } from '@reducers/option';
import { GoodsData } from '@typings/db';
import { Container, SelectedOptionList, TotalPrice } from './styles';

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

  const [{ options }, dispatch] = useReducer(optionReducer, { options: [] });
  const totalPrice = useMemo(() => {
    return options.reduce((prev, curr) => prev + curr.quantity * curr.price, 0);
  }, [options]);
  const [size, setSize, onChangeSize] = useSize(goods, options, dispatch);

  const renderSelectedOptionList: React.ReactElement[] = options.map(option => (
    <SelectedOption
      key={option.name + option.size}
      option={option}
      dispatch={dispatch}
    />
  ));

  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    if (!modal) {
      setSize('');
      dispatch({ type: 'RESET_OPTIONS' });
    }
  }, [modal]);

  return (
    <>
      <Container>
        <Link to="/">목록보기</Link>
        {goods && (
          <>
            <GoodsInfo goods={goods} size={size} onChangeSize={onChangeSize} />
            <TotalPrice>
              총 주문금액
              <strong> {addThousandSeperatorToNumber(totalPrice)}</strong> 원
            </TotalPrice>
            <AddToCartButton options={options} setModal={setModal} />
            {options.length > 0 && (
              <SelectedOptionList>
                {renderSelectedOptionList}
              </SelectedOptionList>
            )}
          </>
        )}
      </Container>
      {modal && <CartCheckModal setModal={setModal} />}
    </>
  );
}
