import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from '@layouts/AppLayout';
import Main from '@pages/Main';
import Detail from '@pages/Detail';

export default function App(): React.ReactElement {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/goods/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
}
