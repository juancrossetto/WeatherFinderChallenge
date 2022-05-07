import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { CITY_DEFAULT, COUNTRY_DEFAULT } from '../../utils/constants';

const { REACT_APP_OPENWEATHERMAP_API_KEY } = process.env;

const HomePage: FC = () => {
  const [cityFilter, setCityFilter] = useState(CITY_DEFAULT);
  const [countryFilter, setCountryFilter] = useState(COUNTRY_DEFAULT);
  const [temperature, setTemperature] = useState(undefined);
  const [city, setCity] = useState(undefined);
  const [country, setCountry] = useState(undefined);
  const [humidity, setHumidity] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [error, setError] = useState(undefined);
  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value || 'Madrid';
    const country = e.target.elements.country.value || 'es';
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && country) {
      setTemperature(data.main.temp);
      setCity(data.name);
      setCountry(data.sys.country);
      setHumidity(data.main.humidity);
      setDescription(data.weather[0].description);
      setError('');
    } else {
      setTemperature(undefined);
      setCity(undefined);
      setCountry(undefined);
      setHumidity(undefined);
      setDescription(undefined);
      setError('Please enter the values.');
    }
  };
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
                <form onSubmit={getWeather}>
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
                <div className="weather__info">
                  {city && country && (
                    <p className="weather__key">
                      {' '}
                      Location:
                      <span className="weather__value">
                        {' '}
                        {city}, {country}
                      </span>
                    </p>
                  )}
                  {temperature && (
                    <p className="weather__key">
                      {' '}
                      Temperature:
                      <span className="weather__value"> {temperature} </span>
                    </p>
                  )}
                  {humidity && (
                    <p className="weather__key">
                      {' '}
                      Humidity:
                      <span className="weather__value"> {humidity} </span>
                    </p>
                  )}
                  {description && (
                    <p className="weather__key">
                      {' '}
                      Conditions:
                      <span className="weather__value"> {description} </span>
                    </p>
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
