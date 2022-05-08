import React, { FC, useState } from 'react';
import ListInfoItem from '../../components/ListInfoItem';
import WeatherForm from '../../components/WeatherForm';
import { useWeather } from '../../hooks/useWeather';

const { REACT_APP_OPENWEATHERMAP_API_KEY } = process.env;

const HomePage: FC = () => {
  const { weather, error, isLoading } = useWeather();

  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-5 title-container">
                <div>
                  <h1 className="title-container__title">Weather Finder</h1>
                  <h3 className="title-container__subtitle">Find out temperature, conditions and more...</h3>
                </div>
              </div>
              <div className="col-7 form-container">
                <WeatherForm />
                <div className="weather__info">
                  {weather && (
                    <>
                      <ListInfoItem
                        label="Location"
                        value={weather.city && weather.country ? `${weather.city}, ${weather.country}` : null}
                      />
                      <ListInfoItem label="Temperature" value={weather.temperature} />
                      <ListInfoItem label="Humidity" value={weather.humidity} />
                      <ListInfoItem label="Conditions" value={weather.conditions} />
                    </>
                  )}
                  {error && <p className="weather__error">{error}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
