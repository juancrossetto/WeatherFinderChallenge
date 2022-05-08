import { createContext } from 'react';
import { WeatherState } from '../../models/WeatherState';

export type WeatherContextProps = {
  weatherState: WeatherState;
  getWeather: (city: string, country: string) => void;
  setWeatherFromStorage: () => void;
};

export const weatherContext = createContext<WeatherContextProps>({} as WeatherContextProps);
