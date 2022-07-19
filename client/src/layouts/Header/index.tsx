import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styles } from './styles';

export default function Header(): React.ReactElement {
  const navigate = useNavigate();
  const handleCartCheck = () => {
    navigate('/goods_cart');
  };

  return (
    <header css={styles.headerZone}>
      <div css={styles.headerInner}>
        <h1 css={styles.headerLogo}>
          <Link to="/">Bears Goods</Link>
        </h1>
      </div>
    </header>
  );
}
