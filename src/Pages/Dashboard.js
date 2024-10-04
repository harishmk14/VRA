import React, { useState, useEffect } from 'react';
import axios from 'axios';
import user from '../Assets/img/user.png'
// import CalendarCard from '../Dashboard/CalendarCard';
// import WeatherCard from '../Dashboard/WeatherCard';
import RadialBarChart from '../Dashboard/RadialBarChart';
// import IncomeCard from '../Dashboard/IncomeCard';
import ExpenseCard from '../Dashboard/ExpenseCard';
import VehicleSection from '../Dashboard/VehicleSection';
import VehicleAvailability from '../Dashboard/VehicleAvailabilitys';
import LiveVehicleStatus from '../Dashboard/LiveTripStatus';  // Import the new component
import '../index.css';
import { useRouteLoaderData } from 'react-router-dom';
// import '../styles/calendar.css';

// const API_KEY = '8e9dbe8f4a5d403b8a9161537242309';
// const CITY = 'Pondicherry';

const Dashboard = () => {
  // const [date, setDate] = useState(new Date());
  // const [weatherData, setWeatherData] = useState(null);
  // const [loading, setLoading] = useState(true);

  // // Array of trips with default data
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

  // useEffect(() => {
  //   const fetchWeather = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}&aqi=no`
  //       );
  //       setWeatherData(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching weather data:', error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchWeather();
  // }, []);
  return (
    <div className="grid h-full gap-5 p-5 pt-3 grid-rows-2">
      {/* First section */}
      <div className="grid w-full h-full gap-5 grid-cols-[60%_auto]">
        <div className=" bg-white shadow-md rounded-lg">
        <LiveVehicleStatus trips={trips} /> 
        </div>
        <div className="h-full bg-white shadow-md rounded-lg  pt-3">
        <ExpenseCard />
        </div>
      </div>
      
      {/* Second section */}
      <div className="grid w-full h-full gap-5 grid-cols-2">
        <div className="h-full  grid grid-cols-2 gap-5">
           <div className='border-r-2 px-1 py-2.5  bg-white shadow-md rounded-lg'>
              <VehicleAvailability />
           </div> 
           <div className='border-r-2 px-1 py-2.5  bg-white shadow-md rounded-lg'>
              <VehicleSection />
           </div>
        </div>
        <div className=" grid grid-cols-2 h-full py-2 bg-white shadow-md rounded-lg">
                    <div className='border-r-2'>
            <RadialBarChart />
          </div> 
          <div className='grid w-full h-full grid-rows-2'>
          <div className='flex flex-col border-b-2 pt-1'>
              <span className='text-lg font-bold text-gray-600 px-4'>User</span>
              <div className='flex justify-center items-center gap-7'> 
                <div className='flex flex-col  items-center'>
                <h2 className='text-4xl font-bold text-blue-500 drop-shadow-md'>250</h2>
                <h2 className='text-2xl font-bold text-gray-600'>Total</h2>
                </div>
                <div className="flex w-[0.5px] h-20 bg-gray-300"></div>
                <div className='flex flex-col  items-center'>
                <h2 className='text-4xl font-bold text-blue-500 drop-shadow-md'>68</h2>
                <h2 className='text-2xl font-bold text-gray-600'>Active</h2>
                </div>
              </div>
          </div>
          <div className='flex flex-col pt-2'>
              <span className='text-lg font-bold text-gray-600 px-4'>Driver</span>
              <div className='flex justify-center items-center gap-7'> 
                <div className='flex flex-col  items-center'>
                <h2 className='text-4xl font-bold text-blue-500 drop-shadow-md'>120</h2>
                <h2 className='text-2xl font-bold text-gray-600'>Total</h2>
                </div>
                <div className="flex w-[0.5px] h-20 bg-gray-300"></div>
                <div className='flex flex-col  items-center'>
                <h2 className='text-4xl font-bold text-blue-500 drop-shadow-md'>78</h2>
                <h2 className='text-2xl font-bold text-gray-600'>Active</h2>
                </div>
              </div>
          </div>
          </div>
      </div>
      </div>
    </div>
  );
  
  
};

export default Dashboard;
