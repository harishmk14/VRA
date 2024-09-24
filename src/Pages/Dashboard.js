// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CalendarCard from '../Components/CalendarCard';
import WeatherCard from '../Components/WeatherCard';
import DonutChart from '../Components/DonutChart';
import income from '../Assets/img/income.jpg';
// import IncomeGraph from '../Components/Incomegraph';
// import ExpenseGraph from '../Components/Expensegraph';
import expense from '../Assets/img/expense.jpg';
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
        <div className='flex-col w-full h-1/2 shadow-md  bg-white rounded-2xl pt-2'>
        <div className="flex w-full h-1/10 items-center justify-center">
      <h2 className="text-lg font-bold text-gray-600">User</h2>
    </div>
    <div className="flex-col w-full h-9/10 items-center justify-center mt-1"></div>
        </div>
        <div className='flex-col w-full h-1/2  bg-white shadow-md rounded-2xl pt-2'>
        <div className="flex w-full h-1/10 items-center justify-center">
      <h2 className="text-lg font-bold text-gray-600">Driver</h2>
    </div>
    <div className="flex-col w-full h-9/10 items-center justify-center mt-1"></div>
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
  <div className="flex-col w-full h-1/2 bg-white shadow-md rounded-2xl pt-2">
    {/* Income Header */}
    <div className="flex w-full h-1/10 items-center justify-center">
      <h2 className="text-lg font-bold text-gray-600">Income</h2>
    </div>
    {/* Income Value */}
    <div className="flex-col w-full h-9/10 items-center justify-center mt-1">
    <div className="flex w-full justify-between mt-1 px-2">
      <h3 className="text-xl font-bold "><i class="bi bi-currency-rupee"></i>30000</h3>
      <span className="flex items-center text-sm text-green-500">
        <i className="bi bi-arrow-up"></i>
        <span className="ml-1">0.48%</span>
      </span>
    </div>
          <img src={income} alt="Income graph" className="w-full h-16 rounded-2xl" />
    {/* <IncomeGraph /> */}
    </div>
  </div>
  
  {/* Expense Section */}
  <div className="flex-col w-full h-1/2 bg-white shadow-md rounded-2xl pt-2">
    {/* expense Header */}
    <div className="flex w-full h-1/10 items-center justify-center">
      <h2 className="text-lg font-bold text-gray-600">Expense</h2>
    </div>
    {/* expense Value */}
    <div className="flex-col w-full h-9/10 items-center justify-center mt-1">
    <div className="flex w-full justify-between mt-1 px-2">
      <h3 className="text-xl font-bold "><i class="bi bi-currency-rupee"></i>9000</h3>
      <span className="flex items-center text-sm text-red-500">
        <i className="bi bi-arrow-down"></i>
        <span className="ml-1">0.13%</span>
      </span>
    </div>
      <img src={expense} alt="Expense graph" className="w-full h-16 rounded-2xl" />
      {/* <ExpenseGraph /> */}
    </div>
  </div>
</div>

            <div className='flex-col w-3/5 h-full bg-white shadow-md rounded-2xl pt-2'>
            <div className="flex w-full h-1/10 items-center justify-center">
      <h2 className="text-lg font-bold text-gray-600">Vehicle</h2>
    </div>
    <div className="flex-col w-full h-9/10 items-center justify-center mt-1"></div>
            </div>
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
