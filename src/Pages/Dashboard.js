import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CalendarCard from '../Components/CalendarCard';
import WeatherCard from '../Components/WeatherCard';
import DonutChart from '../Components/DonutChart';
import IncomeCard from '../Components/IncomeCard';
import ExpenseCard from '../Components/ExpenseCard';
import VehicleSection from '../Components/VehicleSection';
import TotalAndVehicleAvailability from '../Components/TotalSection';
import LiveVehicleStatus from '../Components/LiveTripStatus';  // Import the new component
import '../index.css';
import '../styles/calendar.css';

const API_KEY = '8e9dbe8f4a5d403b8a9161537242309';
const CITY = 'Pondicherry';

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Array of trips with default data
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

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}&aqi=no`
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className='flex flex-col h-full gap-4'>
      <div className='flex flex-grow gap-4 w-full h-2/4'>
        
        {/* live trip section */}
        <LiveVehicleStatus trips={trips} />  {/* Use the new component */}

        <div className='Boxseperate shadow-md flex-col w-1/4'>
          <div className='flex w-full h-1/5 items-center justify-center p-2'>     
            <h2 className='text-lg font-bold text-gray-600 '>Trip Overview</h2>
          </div>
          <div className='flex w-full h-full'><DonutChart /></div>
        </div>

        <TotalAndVehicleAvailability />
      </div>  

      <div className='flex flex-grow w-full h-2/4 gap-4'>
        <div className='flex w-3/5 h-full gap-4'>  
          <div className="flex w-2/5 h-full flex-col gap-4">
            <IncomeCard />
            <ExpenseCard />
          </div>
          <VehicleSection />
        </div>

        <div className='flex w-2/5 h-full bg-white shadow-md rounded-2xl items-center justify-center'>
          <CalendarCard date={date} setDate={setDate} />
          <div className="h-60 max-h-xs w-[1px] bg-gray-300"></div>
          <WeatherCard weatherData={weatherData} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
