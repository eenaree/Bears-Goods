import * as React from 'react';
import { Link } from 'react-router-dom';
import { GoodsCardWrapper } from './styles';
import { addThousandSeperatorToNumber } from '@utils';

interface Props {
  id: number;
  img: string;
  name: string;
  price: number;
}

export default function GoodsCard({
  id,
  img,
  name,
  price,
}: Props): React.ReactElement {
  return (
    <GoodsCardWrapper>
      <Link to={`/goods/${id}`} title={name}>
        <img src={img} alt={name} />
        <span>{name}</span>
        <strong>{addThousandSeperatorToNumber(price)}원</strong>
      </Link>
    </GoodsCardWrapper>
  );
}
