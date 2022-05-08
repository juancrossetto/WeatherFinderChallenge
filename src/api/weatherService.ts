import { Weather } from '../models/Weather';

const { REACT_APP_OPENWEATHERMAP_API_KEY, REACT_APP_OPENWEATHERMAP_URL_BASE } = process.env;

const getWeatherFromApi = async (city: string, country: string): Promise<Weather> => {
  try {
    const url = `${REACT_APP_OPENWEATHERMAP_URL_BASE}weather?q=${city},${country}&appid=${REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`;
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    const result: Weather = {
      temperature: data?.main?.temp,
      city: data.name,
      country: data?.sys?.country,
      humidity: data?.main?.humidity,
      conditions: data?.weather[0]?.description,
    };
    return result;
  } catch (error) {
    console.log('error getting weather', error);
  }
};

export { getWeatherFromApi };
