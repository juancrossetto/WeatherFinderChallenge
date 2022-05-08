import React, { FC } from 'react';
import { useWeather } from '../../hooks/useWeather';
import ListInfoItem from '../ListInfoItem';
import Spinner from '../Spinner';

interface WeatherInformationProps {}

const WeatherInformation: FC<WeatherInformationProps> = () => {
  const { weather, error, isLoading } = useWeather();
  return (
    <div data-testid="weather-information" className="weather__info">
      {weather && (
        <>
          <ListInfoItem label="Location" value={weather.city && weather.country ? `${weather.city}, ${weather.country}` : null} />
          <ListInfoItem label="Temperature" value={weather.temperature} />
          <ListInfoItem label="Humidity" value={weather.humidity} />
          <ListInfoItem label="Conditions" value={weather.conditions} />
        </>
      )}
      {error && (
        <p data-testid="weather-information-error" className="weather__error">
          {error}
        </p>
      )}
      {isLoading && <Spinner />}
    </div>
  );
};

export default WeatherInformation;
