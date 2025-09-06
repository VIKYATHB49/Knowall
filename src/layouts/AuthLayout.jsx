import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';

const AuthLayout = () => {
  return (
    <main>
      <ScrollToTop />
      <Outlet />
    </main>
  );
};

export default AuthLayout;
