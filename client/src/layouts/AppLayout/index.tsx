import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@layouts/Header';
import { Inner } from './styles';

export default function AppLayout(): React.ReactElement {
  return (
    <div>
      <Header />
      <Inner>
        <Outlet />
      </Inner>
    </div>
  );
}
