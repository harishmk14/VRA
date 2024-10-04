import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../Assets/img/logo1.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../index.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Use the useLocation hook

  const navigateTo = (path) => {
    navigate(path);
  };

  // Helper function to check if the current route matches the path
  const isActive = (path) => location.pathname === path;

  return (
    <div className='flex flex-col bg-white min-h-screen px-5 shadow-lg sticky top-0'>
      {/* Logo Section */}
      <div className='flex flex-col w-full h-20 p-2 items-center'>
        <img src={logo} className='max-w-48' alt="Company Logo" />
      </div>

      {/* Navigation Section */}
      <div className='flex flex-col w-full h-auto items-center justify-center pt-7 pb-5'>
        <ul className="space-y-7 text-gray-600 text-base">
          {[
            { path: '/dashboard', icon: 'bi bi-grid-fill', label: 'Dashboard' },
            { path: '/vehicle', icon: 'bi bi-car-front', label: 'Vehicles' },
            { path: '/booking', icon: 'bi bi-ui-checks', label: 'Booking' },
            { path: '/driver', icon: 'bi bi-person-check', label: 'Driver' },
            { path: '/coupendiscount', icon: 'bi bi-ticket-perforated', label: 'Coupon & Discount' },
            { path: '/tripassign', icon: 'bi bi-list-task', label: 'Trip Assign' },
            { path: '/payment', icon: 'bi bi-cash-coin', label: 'Payment' },
            { path: '/maintenance', icon: 'bi bi-gear-wide-connected', label: 'Maintenance' },
            { path: '/performance', icon: 'bi bi-graph-up-arrow', label: 'Performance' },
          ].map(({ path, icon, label }) => (
            <li
              key={path}
              className={`flex items-center space-x-3 sidebar-item cursor-pointer ${isActive(path) ? 'active' : ''}`}
              onClick={() => navigateTo(path)}
            >
              <i className={icon}></i>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="flex w-full h-1 justify-center">
        <div className="w-52 max-w-xs h-[1px] bg-gray-300"></div>
      </div>

      {/* Settings Section */}
      <div className='flex flex-col w-full h-auto items-center justify-center pt-4 pb-4'>
        <ul className="space-y-6 text-gray-600 text-base">
          {[
            { path: '/setting', icon: 'bi bi-gear', label: 'Settings' },
            { path: '/customersupport', icon: 'bi bi-person-fill-gear', label: 'Customer Support' },
          ].map(({ path, icon, label }) => (
            <li
              key={path}
              className={`flex items-center space-x-3 sidebar-item cursor-pointer ${isActive(path) ? 'active' : ''}`}
              onClick={() => navigateTo(path)}
            >
              <i className={icon}></i>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
