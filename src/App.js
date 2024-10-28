// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout'; // Import the Layout component
import Dashboard from './Pages/Dashboard';
import Vehicle from './Pages/Vehicles';
import Booking from './Pages/Bookings';
import Driver from './Pages/Drivers';
import CoupDiscount from './Pages/Coupendiscount';
import Customer from './Pages/Customer';
import Payment from './Pages/Payment';
import Maintenance from './Pages/Maintenance';
import Performance from './Pages/Performance';
import Setting from './Pages/Settings';
import CustomerSupport from './Pages/Customersupport';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="vehicle" element={<Vehicle />} />
          <Route path="booking" element={<Booking />} />
          <Route path="driver" element={<Driver />} />
          <Route path="coupendiscount" element={<CoupDiscount />} />
          <Route path="customer" element={<Customer />} />
          <Route path="payment" element={<Payment />} />
          <Route path="maintenance" element={<Maintenance />} />
          <Route path="performance" element={<Performance />} />
          <Route path="setting" element={<Setting />} />
          <Route path="customersupport" element={<CustomerSupport />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
