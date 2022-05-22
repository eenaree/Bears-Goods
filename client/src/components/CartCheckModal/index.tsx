import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { CloseButton, ModalBody } from './styles';
import ModalView from '@components/ModalView';
import useDelayUnmount from '@hooks/useDelayUnmount';

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CartCheckModal({
  setModal,
}: Props): React.ReactElement {
  const navigate = useNavigate();

  const [isMounted, setIsMounted] = useDelayUnmount(handleModalClose, 500);
  function handleModalClose() {
    setModal(false);
  }
  function handleDelayUnmount() {
    setIsMounted(false);
  }

  const handleCartCheck = () => {
    navigate('/goods_cart');
  };

  return (
    <ModalView isMounted={isMounted}>
      <ModalBody>
        <p>장바구니에 상품을 담았습니다.</p>
        <div>
          <button onClick={handleDelayUnmount}>계속 쇼핑</button>
          <button onClick={handleCartCheck}>장바구니 확인</button>
        </div>
        <CloseButton onClick={handleDelayUnmount}>x</CloseButton>
      </ModalBody>
    </ModalView>
  );
}
