import * as React from 'react';
import { useEffect } from 'react';
import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import LoaderProvider from '@context/LoaderContext';
import Header from '@layouts/Header';
import { useAppSelector } from '@store/hooks';
import { selectCart } from '@store/slices/cartSlice';
import { mq } from '@styles/mediaQueries';

const styles = {
  containerInner: css({
    fontSize: '1.5rem',
    [mq('lg')]: {
      width: 1100,
      margin: '0 auto',
    },
  }),
};

export default function AppLayout() {
  const cart = useAppSelector(selectCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Header />
      <LoaderProvider>
        <div css={styles.containerInner}>
          <Outlet />
        </div>
      </LoaderProvider>
    </>
  );
}
