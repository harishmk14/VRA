import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../Assets/img/logo1.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../index.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = (path) => {
    navigate(path);
  };

  const isActive = (path) => {
    if (path === '/dashboard' && location.pathname === '/') return true;
    return location.pathname === path;
  };

  const navigationItems = [
    { path: '/dashboard', icon: 'bi bi-grid-fill', label: 'Dashboard' },
    { path: '/vehicle', icon: 'bi bi-car-front', label: 'Vehicles' },
    { path: '/employee', icon: 'bi bi-person-fill-gear', label: 'Employee' },
    { path: '/driver', icon: 'bi bi-person-fill-check', label: 'Driver' },
    { path: '/booking', icon: 'bi bi-ui-checks', label: 'Booking' },
    { path: '/Customer', icon: 'bi bi-people-fill', label: 'Customer' },
    { path: '/payment', icon: 'bi bi-cash-coin', label: 'Payment' },
    { path: '/Invoice', icon: 'bi bi-receipt-cutoff', label: 'Invoice' },
    { path: '/maintenance', icon: 'bi bi-gear-wide-connected', label: 'Maintenance' },
    { path: '/performance', icon: 'bi bi-clipboard-data-fill', label: 'Performance' },
    { path: '/setting', icon: 'bi bi-gear-fill', label: 'Settings' },
  ];

  return (
    <div className='flex flex-col bg-white min-h-screen shadow-lg sticky top-0'>
      <div className='flex items-center justify-center h-20 px-6'>
        <img src={logo} className='max-w-[12rem] h-auto' alt="Company Logo" />
      </div>

      <div className='flex flex-col flex-grow overflow-y-auto px-5'>
        <nav className='py-3'>
          <ul className="space-y-2">
            {navigationItems.map(({ path, icon, label }) => (
              <li key={path}>
                <button
                  onClick={() => navigateTo(path)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors
        ${isActive(path)
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  <i className={`${icon} ${isActive(path) ? 'text-blue-600' : ''}`}></i>
                  <span className="text-base font-medium">{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
