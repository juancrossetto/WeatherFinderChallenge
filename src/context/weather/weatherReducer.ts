import { WeatherState } from '../../models/WeatherState';
import { Weather } from '../../models/Weather';

type WeatherActions =
  | { type: 'GET_WEATHER' }
  | { type: 'GET_WEATHER_SUCCESS'; payload: Weather }
  | { type: 'GET_WEATHER_ERROR'; payload: string };

export const weatherReducer = (state: WeatherState, action: WeatherActions): WeatherState => {
  switch (action.type) {
    case 'GET_WEATHER':
      return {
        ...state,
        isLoading: true,
      };
    case 'GET_WEATHER_SUCCESS':
      return {
        ...state,
        weather: action.payload,
        isLoading: false,
        error: null,
      };
    case 'GET_WEATHER_ERROR':
      return {
        ...state,
        weather: null,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
