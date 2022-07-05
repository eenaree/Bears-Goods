import * as React from 'react';
import { useMemo } from 'react';
import { FcAbout } from 'react-icons/fc';
import { addThousandSeperatorToNumber } from '@lib/utils';
import { CartItemOption } from '@typings/db';
import { PriceBox, ToolTipText } from './styles';

interface Props {
  selectedCart: CartItemOption[];
}

export default function CartPriceBox({
  selectedCart,
}: Props): React.ReactElement {
  const selectedCartTotalPrice = useMemo(
    () =>
      selectedCart.reduce((prev, curr) => prev + curr.price * curr.quantity, 0),
    [selectedCart]
  );

  const deliveryFee = useMemo(
    () =>
      selectedCart.length > 0 && selectedCartTotalPrice < 50000 ? 3000 : 0,
    [selectedCart, selectedCartTotalPrice]
  );

  return (
    <PriceBox>
      <p>
        <span>주문금액</span>
        <span>{addThousandSeperatorToNumber(selectedCartTotalPrice)} 원</span>
      </p>
      <p>
        <span>
          배송비 <FcAbout />
          <ToolTipText>5만원 이상 구매시 무료배송</ToolTipText>
        </span>
        <span>{addThousandSeperatorToNumber(deliveryFee)} 원</span>
      </p>
      <hr />
      <p>
        <span>총 주문금액</span>
        <span>
          <strong>
            {addThousandSeperatorToNumber(selectedCartTotalPrice + deliveryFee)}
          </strong>
          &nbsp;원
        </span>
      </p>
    </PriceBox>
  );
}
