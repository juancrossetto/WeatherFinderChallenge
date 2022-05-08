import React, { useReducer } from 'react';
import { getWeatherFromApi } from '../../api/weatherService';
import { WeatherState } from '../../models/WeatherState';
import { getLastWeather, setLastWeather } from '../../utils/storage';
import { weatherContext } from './weatherContext';
import { weatherReducer } from './weatherReducer';

const INITIAL_STATE: WeatherState = {
  weather: null,
  error: null,
  isLoading: false,
};

interface WeatherProviderProps {
  children: JSX.Element | JSX.Element[];
}
export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [weatherState, dispatch] = useReducer(weatherReducer, INITIAL_STATE);
  const getWeather = async (city: string, country: string) => {
    try {
      dispatch({ type: 'GET_WEATHER' });
      const weatherResponse = await getWeatherFromApi(city, country);
      if (!weatherResponse) {
        throw new Error('No information was found for the indicated city and country');
      }
      dispatch({ type: 'GET_WEATHER_SUCCESS', payload: weatherResponse });
      // save in storage
      setLastWeather(JSON.stringify(weatherResponse));
    } catch (error) {
      dispatch({ type: 'GET_WEATHER_ERROR', payload: error.message });
    }
  };

  const setWeatherFromStorage = () => {
    const weatherCache = getLastWeather();
    if (weatherCache) {
      dispatch({ type: 'GET_WEATHER_SUCCESS', payload: JSON.parse(weatherCache) });
    }
  };

  return <weatherContext.Provider value={{ weatherState, getWeather, setWeatherFromStorage }}>{children}</weatherContext.Provider>;
};
