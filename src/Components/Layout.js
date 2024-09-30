// Components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidenavbar';

const Layout = () => {
  return (
    <div className="flex w-screen h-screen">
      {/* Conditional rendering of Sidebar and Header */}
      {window?.location?.pathname !== '/login' && <Sidebar />}
      <div className="flex flex-col flex-grow">
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
