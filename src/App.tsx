import React from 'react';
import Home from './pages/Home';
import './App.css';
import { WeatherProvider } from './context/weather/weatherProvider';

function App() {
  return (
    <WeatherProvider>
      <Home />
    </WeatherProvider>
  );
}

export default App;
