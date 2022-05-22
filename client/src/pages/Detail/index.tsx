import * as React from 'react';
import { useEffect, useState, useReducer } from 'react';
import { Link, useParams } from 'react-router-dom';
import goodsAPI from '@api/goods';
import { GoodsData } from '@typings/db';
import { Container, SelectedOptionList, TotalPrice } from './styles';
import { addThousandSeperatorToNumber } from '@utils';
import { optionReducer, initializeOptions } from '@reducers/option';
import SelectedOption from '@components/SelectedOption';
import GoodsInfo from '@components/GoodsInfo';
import AddToCartButton from '@components/AddToCartButton';
import CartCheckModal from '@components/CartCheckModal';
import useSize from '@hooks/useSize';

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

  const [{ options, totalPrice }, dispatch] = useReducer(
    optionReducer,
    null,
    initializeOptions
  );
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
