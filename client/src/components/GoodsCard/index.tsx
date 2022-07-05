import * as React from 'react';
import { Link } from 'react-router-dom';
import { addThousandSeperatorToNumber } from '@lib/utils';
import {
  CardLabel,
  CardSquare,
  ImageWrapper,
  OverlayText,
  Wrapper,
} from './styles';

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
    <Wrapper>
      <CardSquare>
        <ImageWrapper>
          <img src={img} alt={name} />
        </ImageWrapper>
        <OverlayText>
          <Link to={`/goods/${id}`} title={name}>
            View Detail
          </Link>
        </OverlayText>
      </CardSquare>
      <CardLabel>
        <p>{name}</p>
        <p>
          <strong>{addThousandSeperatorToNumber(price)}</strong> 원
        </p>
      </CardLabel>
    </Wrapper>
  );
}
