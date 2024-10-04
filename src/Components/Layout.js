// Components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidenavbar';

const Layout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] h-screen">
      {/* Conditional rendering of Sidebar */}
      {window?.location?.pathname !== '/login' && (
        <Sidebar className="hidden md:block" />
      )}
      <div className="flex flex-col">
        {/* Conditional rendering of Header */}
        {window?.location?.pathname !== '/login' && <Header />}
        <main className="flex-grow bg-zinc-100 overflow-hidden">
          <div className="h-full flex flex-col">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
