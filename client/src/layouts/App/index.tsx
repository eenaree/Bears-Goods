import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorMessage from '@components/ErrorMessage';
import Cart from '@pages/Cart';
import Detail from '@pages/Detail';
import Main from '@pages/Main';
import AppLayout from './AppLayout';

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/goods/:id" element={<Detail />} />
        <Route path="/goods_cart" element={<Cart />} />
        <Route
          path="*"
          element={<ErrorMessage error="요청한 페이지를 찾을 수 없습니다." />}
        />
      </Route>
    </Routes>
  );
}
