import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../index.css';
import '../styles/calendar.css';
import rainIcon from '../Assets/img/rainy.png';
import windIcon from '../Assets/img/wind.png';
import sunIcon from '../Assets/img/sunny.png';
import cloudyIcon from '../Assets/img/cloudy.png';  // Example additional icon
import stormIcon from '../Assets/img/storm.png';  
  // Example additional icon

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

  const getWeatherIcon = () => {
    if (!weatherData) return sunIcon;

    const condition = weatherData.current.condition.text.toLowerCase();

    if (condition.includes('rain')) {
      return rainIcon;
    } else if (condition.includes('cloud')) {
      return cloudyIcon;
    } else if (condition.includes('storm')) {
      return stormIcon;
    } else {
      return sunIcon; 
    }
  };

  return (
    <div className='flex flex-col h-full gap-5'>
      <div className='flex flex-grow gap-5 w-full h-1/4'>
        <div className='Boxseperate shadow-md'></div>
        <div className='Boxseperate shadow-md'></div>
        <div className='Boxseperate shadow-md'></div>
        <div className='Boxseperate shadow-md'></div>
      </div>

      <div className='flex flex-grow w-full h-2/4 gap-5'>
        <div className='flex w-3/5 h-full bg-white shadow-md rounded-2xl'></div>

        <div className='flex w-2/5 h-full bg-white shadow-md rounded-2xl items-center justify-center'>
          <div className='flex flex-col w-1/2 h-full items-center justify-center p-2'>
            <h2 className='text-lg font-bold text-gray-600'>Calendar</h2>
            <Calendar
              onChange={setDate}
              value={date}
              className='rounded-lg calendar-card'
            />
          </div>

          <div className="h-60 max-h-xs w-[1px] bg-gray-300"></div>

          <div className="flex flex-col w-1/2 h-full items-center justify-center">
            {loading ? (
              <p>Loading weather data...</p>
            ) : weatherData ? (
              <div className="px-3.5 pt-3.5 rounded-lg w-full h-full">
                <div className="text-center">
                <h2 className="text-gray-600 text-lg font-semibold">Weather</h2>
                  <h2 className="text-gray-600 text-base mt-2">{weatherData.location.name}</h2>
                  <p className="text-gray-600 text-sm mt-4">
                    {new Date().toLocaleString('en-US', { weekday: 'short' })}, {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}, {weatherData.current.condition.text}
                  </p>
                </div>
                <div className="flex items-center justify-center mt-5 gap-4">
                  <div className='flex items-center justify-center'>
                  <span className="text-5xl font-bold">{Math.round(weatherData.current.temp_c)}</span>
                  <span className="text-2xl text-gray-500">°C</span>
                  </div>
                  <img src={getWeatherIcon()} alt="Weather Icon" className="w-12 h-12" />
                </div>
                <div className="flex justify-between mt-5 text-gray-500">
                  <div className="flex flex-col items-center">
                    <img src={rainIcon} alt="Precipitation Icon" className="w-6 h-6" />
                    <span className="text-xs">{weatherData.current.precip_mm} mm Precipitation</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src={windIcon} alt="Wind Icon" className="w-6 h-6" />
                    <span className="text-xs">{weatherData.current.wind_kph} km/h Winds</span>
                  </div>
                </div>
              </div>
            ) : (
              <p>Error loading weather data.</p>
            )}
          </div>
        </div>
      </div>
      <div className='flex flex-grow w-full h-1/4 gap-5'>
        <div className='flex w-1/3 h-full bg-white shadow-md rounded-2xl'></div>
        <div className='flex w-1/3 h-full bg-white shadow-md rounded-2xl'></div>
        <div className='flex w-1/3 h-full bg-white shadow-md rounded-2xl'></div>
      </div>
    </div>
  );
};

export default Dashboard;