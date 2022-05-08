import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '.';
import { weatherContext } from '../../context/weather/weatherContext';

const weatherStateMocked = {
  weather: {
    city: 'City Test',
    country: 'Country Test',
    conditions: 'Conditions Test',
    temperature: 'Temperature Test',
    humidity: 'Humidity Test',
  },
  isLoading: false,
  error: '',
};

test('renders home page title', () => {
  const { queryByTestId } = render(
    <weatherContext.Provider
      value={{
        getWeather: jest.fn(),
        setWeatherFromStorage: jest.fn(),
        weatherState: weatherStateMocked,
      }}
    >
      <Home />
    </weatherContext.Provider>
  );
  expect(queryByTestId(/home-title/i)).toBeInTheDocument();
});

test('renders home with form', () => {
  const { queryByTestId } = render(
    <weatherContext.Provider
      value={{
        getWeather: jest.fn(),
        setWeatherFromStorage: jest.fn(),
        weatherState: weatherStateMocked,
      }}
    >
      <Home />
    </weatherContext.Provider>
  );
  expect(queryByTestId(/weather-form/i)).toBeInTheDocument();
});

test('render home with weather information section', () => {
  const { queryByTestId } = render(
    <weatherContext.Provider
      value={{
        getWeather: jest.fn(),
        setWeatherFromStorage: jest.fn(),
        weatherState: weatherStateMocked,
      }}
    >
      <Home />
    </weatherContext.Provider>
  );
  expect(queryByTestId(/weather-information/i)).toBeInTheDocument();
});
