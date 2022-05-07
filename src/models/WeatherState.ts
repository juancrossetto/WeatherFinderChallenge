import { Weather } from './Weather';

export interface WeatherState {
  weather: Weather;
  error: string;
  isLoading: boolean;
}
