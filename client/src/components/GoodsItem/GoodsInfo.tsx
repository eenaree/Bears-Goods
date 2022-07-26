import * as React from 'react';
import { styles } from './styles';

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

export default function GoodsInfo({ children }: Props) {
  return <div css={styles.goodsInfoArea}>{children}</div>;
}
