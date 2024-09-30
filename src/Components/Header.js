import React from 'react';
import profile from '../Assets/img/profile.jpg'
import '../index.css';

const Header = () => {
  return (
      <div className=' flex w-full py-3 bg-zinc-100 '>
      <div className='flex flex-col justify-center items-start w-2/5 h-full px-4'>
          <h1 className='text-xl font-bold text-gray-600'>Welcome, Johny Smith!</h1>
          <p className='text-gray-600 text-sm'>Have a Nice Day...</p>
        </div>
        <div className='flex w-2/5 h-full items-center justify-center'>
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="bi bi-search text-gray-400"></i>
            </div>
            <input
              type="search"
              placeholder="Search"
              className="w-full h-10 pl-10 pr-4 py-2 bg-white rounded-full border border-gray-300 focus:outline-none focus:border-gray-500 placeholder-gray-400 text-sm"
            />
          </div>
        </div>
        <div className='flex w-56 h-full items-center justify-center gap-6 pl-10'>
          <i className="bi bi-chat-dots text-gray-500 text-2xl  cursor-pointer sidebar-item"></i>
          <div className="relative">
            <i className="bi bi-bell text-gray-500 text-2xl  cursor-pointer sidebar-item"></i>
            <span className="absolute top-0 right-0 block h-2 w-2 bg-red-500 rounded-full ring-2 ring-white"></span>
          </div>
          <img
            src={profile}
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer sidebar-item"
          />
          <i className="bi bi-box-arrow-right text-gray-500 text-2xl cursor-pointer sidebar-item"></i>
        </div>
      </div>
  );
};

export default Header;
