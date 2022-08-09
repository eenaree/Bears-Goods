import * as React from 'react';
import { useRef } from 'react';
import AlertModal from '@components/AlertModal';
import { ModalProvider } from '@context/ModalContext';
import { useOption } from '@context/OptionContext';
import { GoodsData } from '@typings/db';
import GoodsOptionActions from './GoodsOptionActions';
import GoodsOptionDropdown from './GoodsOptionDropdown';
import SelectedOption from './SelectedOption';
import { styles } from './styles';

interface Props {
  item: GoodsData;
}

export default function GoodsOptionPicker({ item }: Props) {
  const option = useOption();
  const selectedRef = useRef(new Set(option.map(option => option.size)));

  return (
    <div css={styles.optionArea}>
      <ModalProvider>
        <GoodsOptionDropdown item={item} selectedRef={selectedRef} />
        <AlertModal>이미 선택한 옵션입니다.</AlertModal>
      </ModalProvider>
      <div>
        {option.map(option => (
          <SelectedOption
            key={option.size}
            selectedRef={selectedRef}
            {...option}
          />
        ))}
      </div>
      <GoodsOptionActions item={item} selectedRef={selectedRef} />
    </div>
  );
}
