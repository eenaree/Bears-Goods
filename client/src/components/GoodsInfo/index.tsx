import * as React from 'react';
import { GoodsData } from '@typings/db';
import { addThousandSeperatorToNumber } from '@utils';
import { GoodsImageWrapper, GoodsInfoContainer, GoodsTable } from './styles';

interface Props {
  goods: GoodsData;
  size: string | number;
  onChangeSize: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function GoodsInfo({
  goods,
  size,
  onChangeSize,
}: Props): React.ReactElement {
  const options = goods.size.map(size => (
    <option key={size} value={size}>
      {size}
    </option>
  ));

  return (
    <GoodsInfoContainer>
      <GoodsImageWrapper>
        <img src={goods.img} alt={goods.name} />
      </GoodsImageWrapper>
      <GoodsTable>
        <tbody>
          <tr>
            <th>제품명</th>
            <td>{goods.name}</td>
          </tr>
          <tr>
            <th>판매가</th>
            <td>{addThousandSeperatorToNumber(goods.price)}</td>
          </tr>
          <tr>
            <th>사이즈</th>
            <td>
              <select name="size" value={size} onChange={onChangeSize}>
                <option value="">옵션 선택</option>
                {options}
              </select>
            </td>
          </tr>
        </tbody>
      </GoodsTable>
    </GoodsInfoContainer>
  );
}
