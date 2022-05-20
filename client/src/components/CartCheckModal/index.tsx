import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CloseButton, ModalBody } from './styles';
import ModalView from '@components/ModalView';

interface Props {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CartCheckModal({
  modal,
  setModal,
}: Props): React.ReactElement {
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState<boolean>(true);

  useEffect(() => {
    let animationTimeoutId: number;
    if (modal && !isMounted) {
      animationTimeoutId = window.setTimeout(() => {
        setModal(false);
      }, 500);
    }
    return () => {
      clearTimeout(animationTimeoutId);
    };
  }, [modal, isMounted]);

  const handleModalClose = () => {
    setIsMounted(false);
  };
  const handleCartCheck = () => {
    navigate('/goods_cart');
  };

  return (
    <ModalView isMounted={isMounted}>
      <ModalBody>
        <p>장바구니에 상품을 담았습니다.</p>
        <div>
          <button onClick={handleModalClose}>계속 쇼핑</button>
          <button onClick={handleCartCheck}>장바구니 확인</button>
        </div>
        <CloseButton onClick={handleModalClose}>x</CloseButton>
      </ModalBody>
    </ModalView>
  );
}
