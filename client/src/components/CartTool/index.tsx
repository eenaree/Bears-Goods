import * as React from 'react';
import AlertModal from '@components/AlertModal';
import ModalProvider from '@context/ModalContext';
import CartAllCheckbox from './CartAllCheckbox';
import DeleteAction from './DeleteAction';
import { styles } from './styles';

export default function CartTool(): React.ReactElement {
  return (
    <div css={styles.cartToolZone}>
      <CartAllCheckbox />
      <ModalProvider>
        <DeleteAction />
        <AlertModal>
          <p>선택한 상품이 없습니다.</p>
          <p>삭제할 상품을 선택하세요</p>
        </AlertModal>
      </ModalProvider>
    </div>
  );
}
