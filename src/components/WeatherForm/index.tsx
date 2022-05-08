import React, { ChangeEvent, useEffect, useState } from 'react';
import { useWeather } from '../../hooks/useWeather';
import { CITY_DEFAULT, COUNTRY_DEFAULT } from '../../utils/constants';
import { getLastWeather } from '../../utils/storage';

export const WeatherForm = () => {
  const [cityFilter, setCityFilter] = useState(CITY_DEFAULT);
  const [countryFilter, setCountryFilter] = useState(COUNTRY_DEFAULT);
  const { getWeather } = useWeather();
  useEffect(() => {
    const weatherCache = getLastWeather();
    if (weatherCache) {
      const weatherCacheParsed = JSON.parse(weatherCache);
      setCityFilter(weatherCacheParsed.city);
      setCountryFilter(weatherCacheParsed.country);
    }
  }, []);
  const searchWeather = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const city = cityFilter || CITY_DEFAULT;
      const country = countryFilter || COUNTRY_DEFAULT;
      if (!cityFilter) setCityFilter(city);
      if (!countryFilter) setCountryFilter(country);
      getWeather(city, country);
    } catch (error) {
      throw new Error(error.message);
    }
  };
  return (
    <form data-testid="weather-form" onSubmit={searchWeather}>
      <input
        type="text"
        name="city"
        placeholder="City"
        onChange={(event: ChangeEvent<HTMLInputElement>) => setCityFilter(event.target.value)}
        value={cityFilter}
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        onChange={(event: ChangeEvent<HTMLInputElement>) => setCountryFilter(event.target.value)}
        value={countryFilter}
      />
      <button>Get Weather</button>
    </form>
  );
};

export default WeatherForm;
