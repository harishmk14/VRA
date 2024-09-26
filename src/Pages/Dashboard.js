import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CalendarCard from '../Components/CalendarCard';
import WeatherCard from '../Components/WeatherCard';
import DonutChart from '../Components/DonutChart';
import IncomeCard from '../Components/IncomeCard';
import ExpenseCard from '../Components/ExpenseCard';
import VehicleSection from '../Components/VehicleSection';
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
        <div className='Boxseperate shadow-md flex-col w-2/4 '>
          <div className='flex w-full h-1/6 items-center justify-between px-5'>     
            <h2 className='text-lg font-bold text-gray-600 pl-1'>Live Trip Status</h2>
            <button className='text-gray-600 font-bold'><i className="bi bi-funnel px-1"></i>Filter</button>
          </div>
          <div className='flex flex-col w-full h-5/6 items-center'>
                <div className='flex w-full h-1/12 items-end pb-1'>
                <div className='flex w-1/6 h-full justify-center text-gray-500 text-sm'>Trip No </div>
                <div className='flex w-1/6 h-full justify-center text-gray-500 text-sm'>Vehicle No</div>
                <div className='flex w-1/6 h-full justify-center text-gray-500 text-sm'>Driver</div>
                <div className='flex w-1/6 h-full justify-center text-gray-500 text-sm'>Persons</div>
                <div className='flex w-1/6 h-full justify-center text-gray-500 text-sm'>Status</div>
                {/* <div className='flex w-1/6 h-full justify-center text-gray-500 text-sm'></div> */}
                </div>
                <div className=" flex w-11/12 h-[0.5px] bg-gray-300"></div>
                <div className='flex w-full h-11/12'></div>
          </div>
        </div>
        <div className='flex flex-col w-1/4 h-full gap-4'>
          <div className='flex w-full h-1/2 bg-white shadow-md rounded-2xl'>
              <div className='flex flex-col w-2/5 items-center justify-center'>
                  <h2 className='text-3xl font-bold text-gray-500 '>Total</h2>
                  <h2 className='text-4xl font-bold text-blue-500 drop-shadow-md '>78</h2>
              </div>
              <div className=" flex w-[1px] max-w-xs h-full bg-gray-300"></div>
              <div className='flex flex-col w-3/5'>
                    <div className='flex h-1/2 items-center px-5 justify-between' style={{ backgroundColor: "#f2fef2", borderTopRightRadius: "1rem" }}>
                      <h2 className='text-xl font-bold text-gray-600 '>User</h2>
                      <h2 className='text-2xl font-bold pl-4'>48</h2>
                    </div>
                    <div className=" flex w-full max-w-xs h-[1px] bg-gray-300"></div>
                    <div className='flex h-1/2 items-center px-5 justify-between' style={{ backgroundColor: "#fef2f2", borderBottomRightRadius: "1rem" }}>
                      <h2 className='text-xl font-bold text-gray-600 '>Driver</h2>
                      <h2 className='text-2xl font-bold pl-4 '>30</h2>
                    </div>
              </div>
          </div>
          <div className='flex w-full h-1/2 bg-white shadow-md rounded-2xl'>
                
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
