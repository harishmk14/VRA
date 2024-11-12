import React, { useState } from 'react';
import profile from '../Assets/img/profile.jpg';
import '../index.css';
import CommunicationTab from './CommunicationTab';
import NotificationTab from './NotificationTab';

const Header = () => {
  const [isChatOpen, setChatOpen] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);

  const handleChatClick = () => {
    setChatOpen(true);
  };

  const handleCloseChat = () => {
    setChatOpen(false);
  };

  const handleNotificationClick = () => {
    setNotificationOpen(true);
  };

  const handleCloseNotification = () => {
    setNotificationOpen(false);
  };

  return (
    <>
      <div className='flex flex-col justify-between md:flex-row w-full py-3 px-5 bg-zinc-100'>
        <div className='flex flex-col justify-center items-start w-full md:w-2/5 h-full mb-3 md:mb-0'>
          <h1 className='text-xl font-bold text-gray-600'>Welcome, Johny Smith!</h1>
          <p className='text-gray-600 text-sm'>Have a Nice Day...</p>
        </div>

        <div className='flex w-full md:w-56 h-full items-center justify-center gap-6 pl-0 md:pl-10'>
          <i onClick={handleChatClick} className="bi bi-chat-dots text-gray-500 text-2xl cursor-pointer sidebar-item"></i>
          <div className="relative">
            <i onClick={handleNotificationClick} className="bi bi-bell text-gray-500 text-2xl cursor-pointer sidebar-item"></i>
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

      <CommunicationTab isOpen={isChatOpen} onClose={handleCloseChat} />
      <NotificationTab isOpen={isNotificationOpen} onClose={handleCloseNotification} />
    </>
  );
};

export default Header;
