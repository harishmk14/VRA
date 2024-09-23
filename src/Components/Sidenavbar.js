import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/img/logo1.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../index.css';

const Sidebar = () => {
  const navigate = useNavigate(); // Use the useNavigate hook

  const navigateTo = (path) => {
    navigate(path); // Use navigate instead of window.location.href
  };

  return (
    <div className='flex flex-col w-64 bg-white min-h-screen shadow-lg sticky top-0'>
      <div className='flex flex-col w-full h-20 p-2 items-center'>
        <img src={logo} className='max-w-48 ' alt="Company Logo" />
      </div>
      <div className='flex flex-col w-full h-auto items-center justify-center pt-7 pb-5'>
        <ul className="space-y-7 text-gray-600 text-base">
          <li className="flex items-center space-x-3 sidebar-item cursor-pointer" onClick={() => navigateTo('/dashboard')}>
            <i className="bi bi-grid-fill"></i>
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-3 sidebar-item cursor-pointer" onClick={() => navigateTo('/vehicle')}>
            <i className="bi bi-car-front"></i>
            <span>Vehicles</span>
          </li>
          <li className="flex items-center space-x-3 sidebar-item cursor-pointer" onClick={() => navigateTo('/booking')}>
            <i className="bi bi-ui-checks"></i>
            <span>Booking</span>
          </li>
          <li className="flex items-center space-x-3 sidebar-item cursor-pointer" onClick={() => navigateTo('/driver')}>
            <i className="bi bi-person-check"></i>
            <span>Driver</span>
          </li>
          <li className="flex items-center space-x-3 sidebar-item cursor-pointer" onClick={() => navigateTo('/coupendiscount')}>
            <i className="bi bi-ticket-perforated"></i>
            <span>Coupon & Discount</span>
          </li>
          <li className="flex items-center space-x-3 sidebar-item cursor-pointer" onClick={() => navigateTo('/tripassign')}>
            <i className="bi bi-list-task"></i>
            <span>Trip Assign</span>
          </li>
          <li className="flex items-center space-x-3 sidebar-item cursor-pointer" onClick={() => navigateTo('/payment')}>
            <i className="bi bi-cash-coin"></i>
            <span>Payment</span>
          </li>
          <li className="flex items-center space-x-3 sidebar-item cursor-pointer" onClick={() => navigateTo('/maintenance')}>
            <i className="bi bi-gear-wide-connected"></i>
            <span>Maintenance</span>
          </li>
          <li className="flex items-center space-x-3 sidebar-item cursor-pointer" onClick={() => navigateTo('/performance')}>
            <i className="bi bi-graph-up-arrow"></i>
            <span>Performance</span>
          </li>
        </ul>
      </div>
      <div className="flex w-full h-1 justify-center">
        <div className="w-52 max-w-xs h-[1px] bg-gray-300"></div>
      </div>
      <div className='flex flex-col w-full h-auto items-center justify-center pt-4 pb-4'>
        <ul className="space-y-6 text-gray-600 text-base">
          <li className="flex items-center space-x-3 sidebar-item cursor-pointer" onClick={() => navigateTo('/setting')}>
            <i className="bi bi-gear"></i>
            <span>Settings</span>
          </li>
          <li className="flex items-center space-x-3 sidebar-item cursor-pointer" onClick={() => navigateTo('/customersupport')}>
            <i className="bi bi-person-fill-gear"></i>
            <span>Customer Support</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
