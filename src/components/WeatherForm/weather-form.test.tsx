import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import WeatherForm from '.';
import { WeatherContext } from '../../context/weather/WeatherContext';
import { CITY_DEFAULT, COUNTRY_DEFAULT } from '../../utils/constants';

const mockSubmit = jest.fn();
const weatherMocked = {
  city: 'City Test',
  country: 'Country Test',
  conditions: 'Conditions Test',
  temperature: 'Temperature Test',
  humidity: 'Humidity Test',
};

describe('test weather form', () => {
  beforeEach(() => {
    render(
      <WeatherContext.Provider
        value={{
          getWeather: mockSubmit,
          setWeatherFromStorage: jest.fn(),
          weatherState: {
            weather: weatherMocked,
            isLoading: false,
            error: null,
          },
        }}
      >
        <WeatherForm />
      </WeatherContext.Provider>
    );
  });
  test('renders form weather', () => {
    expect(screen.getByTestId('weather-form')).toBeInTheDocument();
  });

  test('render city input with default value', () => {
    expect(screen.getByPlaceholderText('City')).toHaveValue(CITY_DEFAULT);
  });
  test('render country input with default value', () => {
    expect(screen.getByPlaceholderText('Country')).toHaveValue(COUNTRY_DEFAULT);
  });
  test('form is submitted', () => {
    fireEvent.submit(screen.getByRole('button'));
    expect(mockSubmit).toHaveBeenCalled();
  });
});
