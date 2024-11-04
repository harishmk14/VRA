// Header.js
import React, { useState } from 'react';
import profile from '../Assets/img/profile.jpg';
import '../index.css';
import CommunicationTab from './CommunicationTab'; // Import the CommunicationTab component
import NotificationTab from './NotificationTab'; // Import the NotificationTab component

const Header = () => {
  const [isChatOpen, setChatOpen] = useState(false); // State for managing chat visibility
  const [isNotificationOpen, setNotificationOpen] = useState(false); // State for managing notification visibility

  const handleChatClick = () => {
    setChatOpen(true); // Open the chat when the icon is clicked
  };

  const handleCloseChat = () => {
    setChatOpen(false); // Close the chat when the close button is clicked
  };

  const handleNotificationClick = () => {
    setNotificationOpen(true); // Open the notification tab
  };

  const handleCloseNotification = () => {
    setNotificationOpen(false); // Close the notification tab
  };

  return (
    <>
      <div className='flex flex-col justify-between md:flex-row w-full py-3 px-5 bg-zinc-100'>
        {/* Left Section */}
        <div className='flex flex-col justify-center items-start w-full md:w-2/5 h-full mb-3 md:mb-0'>
          <h1 className='text-xl font-bold text-gray-600'>Welcome, Johny Smith!</h1>
          <p className='text-gray-600 text-sm'>Have a Nice Day...</p>
        </div>

        {/* Search Input */}
        {/* <div className='flex w-full md:w-2/5 h-full items-center justify-center mb-3 md:mb-0'>
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
        </div> */}

        {/* Right Section */}
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

      {/* Communication Tab */}
      <CommunicationTab isOpen={isChatOpen} onClose={handleCloseChat} />
      
      {/* Notification Tab */}
      <NotificationTab isOpen={isNotificationOpen} onClose={handleCloseNotification} />
    </>
  );
};

export default Header;
