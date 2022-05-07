import { useContext } from 'react';
import { weatherContext } from '../context/weather/weatherContext';

export const useWeather = () => {
  const { weatherState, getWeather } = useContext(weatherContext);
  return {
    weather: weatherState.weather,
    error: weatherState.error,
    isLoading: weatherState.isLoading,
    getWeather,
  };
};
