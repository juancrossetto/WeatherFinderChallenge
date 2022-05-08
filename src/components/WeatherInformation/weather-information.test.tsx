import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherInformation from '.';
import { weatherContext } from '../../context/weather/weatherContext';

const weatherMocked = {
  city: 'City Test',
  country: 'Country Test',
  conditions: 'Conditions Test',
  temperature: 'Temperature Test',
  humidity: 'Humidity Test',
};
describe('test weather information', () => {
  beforeEach(() => {
    render(
      <weatherContext.Provider
        value={{
          getWeather: jest.fn(),
          weatherState: {
            weather: weatherMocked,
            isLoading: false,
            error: null,
          },
        }}
      >
        <WeatherInformation />
      </weatherContext.Provider>
    );
  });

  test('render weather information component', () => {
    expect(screen.getByTestId('weather-information')).toBeInTheDocument();
  });

  test('render four items', () => {
    const items = screen.getAllByTestId('list-info-item');
    expect(items).toHaveLength(4);
  });
});

describe('test error and isloading state', () => {
  beforeEach(() => {
    render(
      <weatherContext.Provider
        value={{
          getWeather: jest.fn(),
          weatherState: {
            weather: weatherMocked,
            isLoading: true,
            error: 'test error',
          },
        }}
      >
        <WeatherInformation />
      </weatherContext.Provider>
    );
  });
  test('render component with error', () => {
    const error = screen.getByTestId('weather-information-error');
    expect(error).toHaveTextContent('test error');
  });

  test('loading component', () => {
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });
});
