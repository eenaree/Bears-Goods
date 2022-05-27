import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  CardLabel,
  CardSquare,
  Wrapper,
  ImageWrapper,
  OverlayText,
} from './styles';

interface Props {
  id: number;
  img: string;
  name: string;
}

export default function GoodsCard({
  id,
  img,
  name,
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
      <CardLabel>{name}</CardLabel>
    </Wrapper>
  );
}
