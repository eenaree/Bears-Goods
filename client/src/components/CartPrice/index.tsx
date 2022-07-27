import * as React from 'react';
import { useAppSelector } from '@store/hooks';
import {
  selectCartItemCheckedCount,
  selectCheckedItemTotalPrice,
} from '@store/slices/cartSlice';
import PriceArea from './PriceArea';
import { styles } from './styles';

export default function CartPrice() {
  const cartItemCheckedCount = useAppSelector(selectCartItemCheckedCount);
  const checkedItemTotalPrice = useAppSelector(selectCheckedItemTotalPrice);
  const deliveryFee =
    cartItemCheckedCount && checkedItemTotalPrice < 30000 ? 3000 : 0;

  return (
    <section>
      <div css={styles.cartPriceZone}>
        <PriceArea title="선택 상품 금액" price={checkedItemTotalPrice} />
        <PriceArea title="배송비" price={deliveryFee} />
        <hr />
        <PriceArea
          title="총 주문금액"
          price={checkedItemTotalPrice + deliveryFee}
        />
      </div>
      <small css={styles.smallText}>* 3만원 이상 구매시 무료배송</small>
    </section>
  );
}
