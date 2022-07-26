import * as React from 'react';
import ModalProvider from '@context/ModalContext';
import CartAllCheckbox from './CartAllCheckbox';
import DeleteAction from './DeleteAction';
import RenderModalDialog from './RenderModalDialog';
import { styles } from './styles';

export default function CartTool() {
  return (
    <div css={styles.cartToolZone}>
      <CartAllCheckbox />
      <ModalProvider>
        <DeleteAction />
        <RenderModalDialog />
      </ModalProvider>
    </div>
  );
}
