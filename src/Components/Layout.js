// Components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidenavbar';

const Layout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] h-screen">
        <Sidebar className="hidden md:block" />
      <div className="flex flex-col">
        <Header />
        <main className="flex-grow bg-zinc-100 overflow-hidden relative">
          <div className="absolute inset-0 overflow-y-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
