import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CalendarCard from '../Components/CalendarCard';
import WeatherCard from '../Components/WeatherCard';
import DonutChart from '../Components/DonutChart';
import IncomeCard from '../Components/IncomeCard';
import ExpenseCard from '../Components/ExpenseCard';
import VehicleSection from '../Components/VehicleSection';
import user from '../Assets/img/user.png';
import driver from '../Assets/img/driver.png';
import '../index.css';
import '../styles/calendar.css';

const API_KEY = '8e9dbe8f4a5d403b8a9161537242309';
const CITY = 'Pondicherry';

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

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
        <div className='Boxseperate shadow-md flex-col w-2/4'>
          <div className='flex w-full h-1/5 items-center justify-center p-2'>     
            <h2 className='text-lg font-bold text-gray-600 '>Live Trip Status</h2>
          </div>
          <div className='flex w-full h-4/5'></div>
        </div>
        <div className='flex flex-col w-1/4 h-full gap-4'>
          <div className='flex w-full h-1/2 bg-white shadow-md rounded-2xl pt-2'>
                <div className=' flex flex-col h-full w-2/5 justify-center items-center'>
                {/* <h2 className='text-lg font-bold text-gray-600 '>Users</h2> */}
                <img
            src={user}
            alt="user"
            className="w-20 h-20"
          />
                </div>
                <div className='flex flex-col h-full w-3/5'>
                      <div className='flex w-full h-1/2 items-center'>
                      <h2 className=' flex text-xl font-bold '>Total</h2>
                      </div>
                      <div className='flex w-full h-1/2 items-center'>
                      <h2 className=' flex text-xl font-bold '>Active</h2>
                      </div>
                      <div></div>
                </div>
          </div>
          <div className='flex w-full h-1/2 bg-white shadow-md rounded-2xl pt-2'>
                <div className=' flex flex-col h-full w-2/5 justify-center items-center'>
                {/* <h2 className='text-lg font-bold text-gray-600 '>Users</h2> */}
                <img
            src={driver}
            alt="Driver"
            className="w-20 h-20"
          />
                </div>
                <div className='flex flex-col h-full w-3/5'>
                      <div className='flex w-full h-1/2 items-center'>
                      <h2 className=' flex text-xl font-bold '>Total</h2>
                      </div>
                      <div className='flex w-full h-1/2 items-center'>
                      <h2 className=' flex text-xl font-bold '>Active</h2>
                      </div>
                      <div></div>
                </div>
          </div>
        </div>
        <div className='Boxseperate shadow-md flex-col w-1/4'>
          <div className='flex w-full h-1/5 items-center justify-center p-2'>     
            <h2 className='text-lg font-bold text-gray-600 '>Trip Overview</h2>
          </div>
          <div className='flex w-full h-full'><DonutChart /></div>
        </div>
      </div>  

      <div className='flex flex-grow w-full h-2/4 gap-4'>
        <div className='flex w-3/5 h-full gap-4'>  
          <div className="flex w-2/5 h-full flex-col gap-4">
            <IncomeCard />
            <ExpenseCard />
          </div>
          {/* Insert the VehicleSection component */}
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
