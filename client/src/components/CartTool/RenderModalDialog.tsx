import * as React from 'react';
import AlertModal from '@components/AlertModal';
import ConfirmModal from '@components/ConfirmModal';
import { useModalDispatch } from '@context/ModalContext';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  removeSelectedCartItem,
  selectCartItemCheckedCount,
} from '@store/slices/cartSlice';

export default function RenderModalDialog() {
  const cartItemCheckedCount = useAppSelector(selectCartItemCheckedCount);

  const appDispatch = useAppDispatch();
  const modalDispatch = useModalDispatch();

  const onConfirm = () => {
    modalDispatch({ type: 'CLOSE_MODAL' });
    appDispatch(removeSelectedCartItem());
  };

  return (
    <>
      {cartItemCheckedCount === 0 && (
        <AlertModal>
          <p>선택한 상품이 없습니다.</p>
          <p>삭제할 상품을 선택하세요</p>
        </AlertModal>
      )}
      {cartItemCheckedCount > 0 && (
        <ConfirmModal
          message="선택한 상품을 삭제하시겠습니까?"
          onConfirm={onConfirm}
        />
      )}
    </>
  );
}
