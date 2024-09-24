// src/components/WeatherCard.js
import React from 'react';
import sunIcon from '../Assets/img/sunny.png';
import rainIcon from '../Assets/img/rainy.png';
import windIcon from '../Assets/img/wind.png';
import cloudyIcon from '../Assets/img/cloudy.png'; 
import stormIcon from '../Assets/img/storm.png';

const WeatherCard = ({ weatherData, loading }) => {

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
    <div className="flex flex-col w-1/2 h-full items-center justify-center">
      {loading ? (
        <p>Loading weather data...</p>
      ) : weatherData ? (
        <div className="px-3.5 pt-5 rounded-lg w-full h-full">
          <div className="text-center">
            <h2 className="text-gray-600 text-lg font-semibold">Weather</h2>
            <h2 className="text-gray-600 text-base mt-3">{weatherData.location.name}</h2>
            <p className="text-gray-600 text-sm mt-4">
              {new Date().toLocaleString('en-US', { weekday: 'short' })}, {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}, {weatherData.current.condition.text}
            </p>
          </div>
          <div className="flex items-center justify-center mt-2 gap-4">
            <div className='flex items-center justify-center'>
              <span className="text-5xl font-bold">{Math.round(weatherData.current.temp_c)}</span>
              <span className="text-2xl text-gray-500">°C</span>
            </div>
            <img src={getWeatherIcon()} alt="Weather Icon" className="w-12 h-12" />
          </div>
          <div className="flex justify-center mt-2 text-gray-500 flex-col">
            <div className="flex  items-center gap-6 mt-2">
              <img src={rainIcon} alt="Precipitation Icon" className="w-6 h-6" />
              <span className="text-xs">{weatherData.current.precip_mm} mm Precipitation</span>
            </div>
            <div className="flex  items-center gap-6 mt-2">
              <img src={windIcon} alt="Wind Icon" className="w-6 h-6" />
              <span className="text-xs">{weatherData.current.wind_kph} km/h Winds</span>
            </div>
          </div>
        </div>
      ) : (
        <p>Error loading weather data.</p>
      )}
    </div>
  );
};

export default WeatherCard;
