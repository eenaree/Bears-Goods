import { useCallback, useEffect, useState } from 'react';
import { OptionAction } from '@reducers/option';
import { GoodsData, GoodsOption } from '@typings/db';

const useSize = (
  goods: GoodsData | null,
  options: GoodsOption[],
  dispatch: React.Dispatch<OptionAction>
) => {
  const [size, setSize] = useState<string | number>('');
  const onChangeSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value);
  };

  const checkPrevSelectedSize = useCallback(
    (size: string | number): boolean => {
      return options.some(option => option.size === size);
    },
    [options]
  );

  useEffect(() => {
    if (!size) return;
    if (size && goods) {
      if (checkPrevSelectedSize(size)) {
        alert('이미 추가된 옵션입니다.');
        return;
      }
      const newOption = {
        id: goods.id,
        name: goods.name,
        size,
        price: goods.price,
        quantity: 1,
        img: goods.img,
      };
      dispatch({ type: 'ADD_OPTION', option: newOption });
    }
  }, [size, goods]);

  return [size, setSize, onChangeSize] as const;
};

export default useSize;
