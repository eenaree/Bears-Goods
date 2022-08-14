import * as React from 'react';
import { Link } from 'react-router-dom';
import HeaderTop from './HeaderTop';
import { styles } from './styles';

export default function Header() {
  return (
    <header css={styles.headerZone}>
      <HeaderTop />
      <div css={styles.headerInner}>
        <h1 css={styles.headerLogo}>
          <Link to="/">Bears Goods</Link>
        </h1>
      </div>
    </header>
  );
}
