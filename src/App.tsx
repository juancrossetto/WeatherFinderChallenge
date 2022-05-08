import React from 'react';
import Home from './pages/Home';
import './App.css';
import { WeatherProvider } from './context/weather/weatherProvider';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <WeatherProvider>
        <Home />
      </WeatherProvider>
    </ErrorBoundary>
  );
}

export default App;
