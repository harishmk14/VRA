// src/Components/WeatherWidget.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import rainIcon from '../Assets/img/rainy.png';
import windIcon from '../Assets/img/wind.png';
import sunIcon from '../Assets/img/sunny.png';
import cloudyIcon from '../Assets/img/cloudy.png';
import stormIcon from '../Assets/img/storm.png';

const API_KEY = '8e9dbe8f4a5d403b8a9161537242309';
const CITY = 'Pondicherry';

const WeatherWidget = () => {
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
    <div className="flex flex-col w-1/2 h-full items-center justify-center">
      {loading ? (
        <p>Loading weather data...</p>
      ) : weatherData ? (
        <div className="px-3.5 pt-3.5 rounded-lg w-full h-full">
          <div className="text-center">
            <h2 className="text-gray-600 text-lg font-semibold">{weatherData.location.name}</h2>
            <p className="text-gray-400 text-sm">
              {new Date().toLocaleString('en-US', { weekday: 'short' })}, {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}, {weatherData.current.condition.text}
            </p>
          </div>
          <div className="flex items-center justify-center mt-4">
            <span className="text-5xl font-bold">{Math.round(weatherData.current.temp_c)}</span>
            <span className="text-2xl text-gray-500">°C</span>
          </div>
          <div className="flex justify-center items-center mt-4">
            <img src={getWeatherIcon()} alt="Weather Icon" className="w-12 h-12" />
          </div>
          <div className="flex justify-between mt-4 text-gray-500">
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
  );
};

export default WeatherWidget;
