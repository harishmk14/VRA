import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidenavbar';
import Dashboard from './Pages/Dashboard';

const App = () => {
  return (
    <div className='flex w-screen h-screen'>
      <Sidebar />
      <div className="flex flex-col flex-grow  ">
      <Header />
        <main className="flex-grow p-5 bg-zinc-100">
          <Dashboard />
        </main>
      </div>
    </div>

  );
};

export default App;
