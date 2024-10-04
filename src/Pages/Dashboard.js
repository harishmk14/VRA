// src/Pages/Dashboard.js

import React, { useState } from 'react';
import RadialBarChart from '../Dashboard/RadialBarChart';
import ExpenseCard from '../Dashboard/ExpenseCard';
import VehicleSection from '../Dashboard/VehicleSection';
import VehicleAvailability from '../Dashboard/VehicleAvailabilitys';
import LiveVehicleStatus from '../Dashboard/LiveTripStatus';
import UserDriverStats from '../Dashboard/UserDriverStats';  // Import the new component
import '../index.css';

const Dashboard = () => {
  const [trips, setTrips] = useState([
    { tripNo: '#1', vehicleNo: 'PY01H2200', driver: 'John', persons: 5, status: 'Ongoing' },
    { tripNo: '#2', vehicleNo: 'PY01H2201', driver: 'Jane', persons: 3, status: 'Completed' },
    { tripNo: '#3', vehicleNo: 'PY01H2202', driver: 'Mike', persons: 4, status: 'Ongoing' },
    { tripNo: '#4', vehicleNo: 'PY01H2203', driver: 'David', persons: 2, status: 'Cancelled' },
    { tripNo: '#5', vehicleNo: 'PY01H2204', driver: 'Lisa', persons: 6, status: 'Completed' },
    { tripNo: '#1', vehicleNo: 'PY01H2200', driver: 'John', persons: 5, status: 'Ongoing' },
    { tripNo: '#2', vehicleNo: 'PY01H2201', driver: 'Jane', persons: 3, status: 'Completed' },
    { tripNo: '#3', vehicleNo: 'PY01H2202', driver: 'Mike', persons: 4, status: 'Ongoing' },
    { tripNo: '#4', vehicleNo: 'PY01H2203', driver: 'David', persons: 2, status: 'Cancelled' },
    { tripNo: '#5', vehicleNo: 'PY01H2204', driver: 'Lisa', persons: 6, status: 'Completed' },
  ]);

  return (
    <div className="grid h-full gap-5 p-5 pt-3 grid-rows-2">
      {/* First section */}
      <div className="grid w-full h-full gap-5 grid-cols-1 md:grid-cols-[60%_auto]">
        <div className="bg-white shadow-md rounded-lg">
          <LiveVehicleStatus trips={trips} />
        </div>
        <div className="h-full bg-white shadow-md rounded-lg pt-3">
          <ExpenseCard />
        </div>
      </div>

      {/* Second section */}
      <div className="grid w-full h-full gap-5 grid-cols-1 md:grid-cols-2">
        <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className='border-r-2 md:border-r-0 px-1 py-2.5 bg-white shadow-md rounded-lg'>
            <VehicleAvailability />
          </div>
          <div className='border-r-2 md:border-r-0 px-1 py-2.5 bg-white shadow-md rounded-lg'>
            <VehicleSection />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 h-full py-2 bg-white shadow-md rounded-lg">
          <div className='border-r-2 md:border-r-2'>
            <RadialBarChart />
          </div>
          <div className='grid w-full h-full grid-rows-2'>
            <UserDriverStats title="User" total={250} active={68} />
            <UserDriverStats title="Driver" total={120} active={78} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
