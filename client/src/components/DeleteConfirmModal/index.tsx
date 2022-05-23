import * as React from 'react';
import ModalView from '@components/ModalView';
import { ModalBody } from './styles';
import useDelayUnmount from '@hooks/useDelayUnmount';
import { useCartDispatch } from '@context/CartContext';

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DeleteConfirmModal({
  setModal,
}: Props): React.ReactElement {
  const dispatch = useCartDispatch();
  const [isMounted, setIsMounted] = useDelayUnmount(handleCartReset, 500);
  function handleDelayUnmount() {
    setIsMounted(false);
  }

  function handleCartReset() {
    dispatch({ type: 'RESET_CART' });
    setModal(false);
  }

  function handleModalClose() {
    setModal(false);
  }

  return (
    <ModalView isMounted={isMounted}>
      <ModalBody>
        <p>상품을 전체 삭제하시겠습니까?</p>
        <button onClick={handleDelayUnmount}>예</button>
        <button onClick={handleModalClose}>아니오</button>
      </ModalBody>
    </ModalView>
  );
}
