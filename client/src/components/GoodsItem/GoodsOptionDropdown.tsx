import * as React from 'react';
import Dropdown from '@components/Dropdown';
import { useOptionDispatch } from '@context/OptionContext';
import { GoodsData, GoodsOption } from '@typings/db';

interface Props {
  item: GoodsData;
}

export default function GoodsOptionDropdown({
  item,
}: Props): React.ReactElement {
  const optionDispatch = useOptionDispatch();
  const sizes = item.size.map(size => ({
    label: `${size}`,
    value: `${size}`,
  }));

  const onChangeSize = (size: string) => {
    const parsedSize: GoodsOption['size'] = isNaN(Number(size))
      ? size
      : Number(size);

    const newOption = { ...item, size: parsedSize, quantity: 1 };
    optionDispatch({ type: 'ADD_OPTION', option: newOption });
  };

  return (
    <Dropdown
      options={sizes}
      selected="옵션 선택"
      onChangeSelected={onChangeSize}
    />
  );
}
