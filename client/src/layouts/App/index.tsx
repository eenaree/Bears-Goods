import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from '@pages/Cart';
import Detail from '@pages/Detail';
import Main from '@pages/Main';
import AppLayout from './AppLayout';

export default function App(): React.ReactElement {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/goods/:id" element={<Detail />} />
        <Route path="/goods_cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}
