import * as React from 'react';
import CheckCartModal from '@components/CheckCartModal';
import { ModalProvider } from '@context/ModalContext';
import { GoodsData } from '@typings/db';
import AddToCart from './AddToCart';
import AddToWish from './AddToWish';
import { styles } from './styles';

interface Props {
  item: GoodsData;
  selectedRef: React.MutableRefObject<Set<string | number>>;
}

export default function GoodsOptionActions({ item, selectedRef }: Props) {
  return (
    <div css={styles.actionButtonWrapper}>
      <AddToWish item={item} />
      <ModalProvider>
        <AddToCart />
        <CheckCartModal selectedRef={selectedRef} />
      </ModalProvider>
    </div>
  );
}
